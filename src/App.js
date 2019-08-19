import React from 'react';
import './App.css';
import { Admin, Resource, EditGuesser, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import List from './components/List/List';
import PostList from './components/PostList/PostList';
import PostEdit from './components/PostEdit/PostEdit';
import PostCreate from './components/PostCreate/PostCreate';
import Dashboard from './components/Dashboard/Dashboard';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import dataProvider from './utils/DataProvider/DataProvider';

import authProvider from './utils/AuthProvider/AuthProvider';
// const dataProvider = jsonServerProvider('http://127.0.0.1:8000/boco_portal');

const App = () => (
        <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
            <Resource name="rounds" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
            <Resource name="users" list={List} icon={UserIcon}/>
            <Resource name="sports" list={ListGuesser} />
            <Resource name="colleges" list={ListGuesser} />
        </Admin>
    );

export default App;