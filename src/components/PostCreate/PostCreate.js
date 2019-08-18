import React from 'react';
import { Create, SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, LongTextInput } from 'react-admin'

const postCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
           <DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">
               <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
           <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);

export default postCreate;