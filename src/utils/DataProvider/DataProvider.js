import {
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    DELETE,
    fetchUtils
} from 'react-admin';

import { stringify } from 'query-string'

const API_URL = 'http://172.17.65.149:8000/boco_portal'

const convertDataProviderRequestToHTTP = (type, resource, params) => {
    const token = localStorage.getItem('token') || '';
    const auth_header = `JWT ${token}`;

    switch (type) {
        case GET_LIST: {
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            const query = {
                sort: JSON.stringify([field, order]),
                range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
                filter: JSON.stringify(params.filter),
            };
            return {
                url: `${API_URL}/${resource}?${stringify(query)}`,
                options: {
                    method: 'GET',
                    headers: new Headers({
                        Authorization: auth_header
                    })
                }
            };
        }

        case GET_ONE: 
            return { 
                url: `${API_URL}/${resource}/${params.id}`,
                options: {
                    method: 'GET',
                    headers: new Headers({
                        Authorization: auth_header
                    })
                }
            }
            
        case GET_MANY: {
            const query = {
                filter: JSON.stringify({ id: params.ids }),
            };
            return {
                url: `${API_URL}/${resource}?${stringify(query)}`,
                options: {
                    method: 'GET',
                    headers: new Headers({
                        Authorization: auth_header
                    })
                }
            };
        }

        case GET_MANY_REFERENCE: {
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            const query = {
                sort: JSON.stringify([field, order]),
                range: JSON.stringify([(page - 1) * perPage, (page * perPage) - 1]),
                filter: JSON.stringify({ ...params.filter, [params.target]: params.id }),
            };
            return {
                url: `${API_URL}/${resource}?${stringify(query)}`,
                options: {
                    method: 'GET',
                    headers: new Headers({
                        Authorization: auth_header
                    })
                }
            };
        }

        case UPDATE:
            return {
                url: `${API_URL}/${resource}/${params.id}`,
                options: {
                    method: 'POST', 
                    body: JSON.stringify(params.data),
                    headers: new Headers({
                        Authorization: auth_header
                    })
                },
            };

        case CREATE:
            return {
                url: `${API_URL}/${resource}`,
                options: {
                    method: 'POST', 
                    body: JSON.stringify(params.data),
                    headers: new Headers({
                        Authorization: auth_header
                    })
                },
            };

        case DELETE:
            return {
                url: `${API_URL}/${resource}/${params.id}`,
                options: {
                    method: 'DELETE',
                    headers: new Headers({
                        Authorization: auth_header
                    })
                },
            };

        default:
            throw new Error('Unsupported fetch action type');
    }
}

const convertHTTPResponseToDataProvider = (response, type, resource, params) => {
    const { headers, json } = response;
    switch (type) {
        case GET_LIST:
            return {
                data: json.map(x => x),
                total: parseInt(headers.get('X-Total-Count').split('/').pop(), 10),
            };
        
        case CREATE:
            return {data: { ...params.data, id: json.id }};

        default:
            return { data: json };
    }
}


export default (type, resource, params) => {
    const { fetchJson } = fetchUtils;
    const { url, options } = convertDataProviderRequestToHTTP(type, resource, params);
    const token = localStorage.getItem('token') || '';
    return fetchJson(url, options)
        .then(response => convertHTTPResponseToDataProvider(response, type, resource, params))
}