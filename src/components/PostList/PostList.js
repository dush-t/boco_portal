import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';

import PostFilter from '../PostFilter/PostFilter';

const postList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="sport" />
            <TextField source="venue" />
            <TextField source="round_name" />
            <TextField source="round_type" />
        </Datagrid>
    </List>
);

export default postList;