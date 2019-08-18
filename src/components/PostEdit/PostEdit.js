import React from 'react';
import { Edit, SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, LongTextInput } from 'react-admin'

const postEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
           <DisabledInput source="id" />
            {/* <ReferenceInput source="userId" reference="users">
               <SelectInput optionText="name" />
            </ReferenceInput> */}
            <ReferenceInput source="id" reference="sports">
                <SelectInput optionText="name" /> 
            </ReferenceInput>
            <TextInput source="venue" />
            <TextInput source="round_name" />
            <TextInput source="round_type" />
        </SimpleForm>
    </Edit>
);

export default postEdit;

// Keep optionText equal to the field you wanna populate from in the json response.