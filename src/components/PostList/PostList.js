import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';

import PostFilter from '../PostFilter/PostFilter';

const postList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            {/* <TextField source="id" /> */}
            {/* <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField> */}
            <ReferenceField source="sport" reference="sports">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="gender" />
            <TextField source="venue" />
            <TextField source="round_name" />
            <TextField source="round_type" />
            <ReferenceField source="team1" reference="colleges">
                <TextField source="short_name" />
            </ReferenceField>
            <ReferenceField source="team2" reference="colleges">
                <TextField source="short_name" />
            </ReferenceField>
        </Datagrid>
    </List>
);

export default postList;