import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

const API_URL = 'http://appd.bits-dvm.org:8000/boco_portal'

export default async (type, params) => {
    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request(`${API_URL}/sign_in`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        await fetch(request)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText)
                }
                return response.json();
            })
            .then(({ JWT }) => {
                localStorage.setItem('token', JWT);
                localStorage.setItem('username', username);
            })
        return Promise.resolve();

    } else if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        localStorage.removeItem('token')
        return Promise.resolve();

    } else if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();

    } else if (type === AUTH_CHECK) {
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject('You were logged out');

    } else {
        return Promise.reject('Unknown method');
    }

};