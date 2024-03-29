import React from 'react';
import './App.css';
import { Admin, Resource, EditGuesser, ListGuesser } from 'react-admin';

import PostList from './components/PostList/PostList';
import PostEdit from './components/PostEdit/PostEdit';
import PostCreate from './components/PostCreate/PostCreate';
import CollegeCreate from './components/CollegeCreate/CollegeCreate';
import Dashboard from './components/Dashboard/Dashboard';

import CollegeIcon from '@material-ui/icons/School';
import SportIcon from '@material-ui/icons/Pool';
import EventIcon from '@material-ui/icons/EventNote';

import dataProvider from './utils/DataProvider/DataProvider';

import authProvider from './utils/AuthProvider/AuthProvider';
import MiscEventList from './components/MiscEventList/MiscEventList';
import MiscEventEdit from './components/MiscEventEdit/MiscEventEdit';
import MiscEventCreate from './components/MiscEventCreate/MiscEventCreate';

import VenueList from './components/VenueList/VenueList';
import VenueEdit from './components/VenueEdit/VenueEdit';
import VenueCreate from './components/VenueCreate/VenueCreate';

const App = () => (
        <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
            <Resource name="rounds" list={PostList} edit={PostEdit} create={PostCreate} icon={EventIcon} />
            <Resource name="events" list={MiscEventList} edit={MiscEventEdit} create={MiscEventCreate} />
            <Resource name="sports" list={ListGuesser} icon={SportIcon} />
            <Resource name="colleges" list={ListGuesser} edit={EditGuesser} create={CollegeCreate} icon={CollegeIcon} />
            <Resource name="venues" list={VenueList} edit={VenueEdit} create={VenueCreate} />
        </Admin>
    );

export default App;