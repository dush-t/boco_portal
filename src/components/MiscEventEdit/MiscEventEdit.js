import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, LongTextInput } from 'react-admin'
import { DateTimeInput } from 'react-admin-date-inputs';

const miscEventEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <LongTextInput source="description" />
            <NumberInput source="day" />
            <DateTimeInput 
                source="timestamp" 
                label="Timing"
                options={{
                    format: 'dd/MM/yyyy, HH:mm',
                    ampm: false,
                    clearable: true,
                    variant: "inline"
                }} />
            <TextInput source="venue" />
            <TextInput source="organiser" />
        </SimpleForm>
    </Edit>
)

export default miscEventEdit;