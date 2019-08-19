import React, { Fragment } from 'react';
import { Create, SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, BooleanInput, FormDataConsumer, AutocompleteInput } from 'react-admin'

const collegeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="short_name" />
        </SimpleForm>
    </Create>
)

export default collegeCreate