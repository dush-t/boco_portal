import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, LongTextInput, ReferenceInput, SelectInput } from 'react-admin'
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
            {/* <TextInput source="venue" /> */}
            <ReferenceInput label="Venue" source="venue" reference="venues">
                <SelectInput optionText="name" /> 
            </ReferenceInput>
            <TextInput source="organiser" />
        </SimpleForm>
    </Edit>
)

export default miscEventEdit;