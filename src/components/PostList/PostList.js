import React from 'react';
import { List, Datagrid, TextField, ReferenceField, DateField, EditButton } from 'react-admin';

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
            {/* <TextField source="venue" /> */}
            <ReferenceField source="venue" reference="venues">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="timestamp" showTime  options={{ day: 'numeric', hour: 'numeric', minute: 'numeric' }}/>
            <TextField source="round_name" />
            <TextField source="round_type" />
            <ReferenceField source="team1" reference="colleges">
                <TextField source="short_name" />
            </ReferenceField>
            <ReferenceField source="team2" reference="colleges">
                <TextField source="short_name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export default postList;