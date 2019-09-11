import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

// import PostFilter from '../PostFilter/PostFilter';

const venueList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);

export default venueList;