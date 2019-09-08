import React from 'react';
import { List, Datagrid, TextField, DateField, EditButton, ReferenceField } from 'react-admin';

// import PostFilter from '../PostFilter/PostFilter';

const miscEventList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="day" />
            <DateField source="timestamp" showTime />
            <ReferenceField source="venue" reference="venues">
                <TextField source="name" />
            </ReferenceField>
            {/* <TextField source="venue" /> */}
            <TextField source="organiser" />
            <EditButton />
        </Datagrid>
    </List>
);

export default miscEventList;