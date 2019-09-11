import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, LongTextInput } from 'react-admin'
import { DateTimeInput } from 'react-admin-date-inputs';

const venueEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
)

export default venueEdit;