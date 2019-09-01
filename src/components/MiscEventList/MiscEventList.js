import React from 'react';
import { List, Datagrid, TextField, DateField, EditButton } from 'react-admin';

// import PostFilter from '../PostFilter/PostFilter';

const miscEventList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="day" />
            <DateField source="timestamp" showTime />
            <TextField source="venue" />
            <TextField source="organiser" />
            <EditButton />
        </Datagrid>
    </List>
);

export default miscEventList;