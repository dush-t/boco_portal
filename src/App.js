import React from 'react';
import './App.css';
import { Admin, Resource, EditGuesser, ListGuesser, CreateGuesser } from 'react-admin';

import PostList from './components/PostList/PostList';
import PostEdit from './components/PostEdit/PostEdit';
import PostCreate from './components/PostCreate/PostCreate';
import CollegeCreate from './components/CollegeCreate/CollegeCreate';
import Dashboard from './components/Dashboard/Dashboard';

import PostIcon from '@material-ui/icons/Book';
import dataProvider from './utils/DataProvider/DataProvider';

import authProvider from './utils/AuthProvider/AuthProvider';
// const dataProvider = jsonServerProvider('http://127.0.0.1:8000/boco_portal');

const App = () => (
        <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
            <Resource name="rounds" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
            <Resource name="sports" list={ListGuesser} />
            <Resource name="colleges" list={ListGuesser} edit={EditGuesser} create={CollegeCreate} />
        </Admin>
    );

export default App;