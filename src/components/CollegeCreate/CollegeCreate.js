import React from 'react';
import { Create, SimpleForm, DisabledInput, TextInput} from 'react-admin'

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