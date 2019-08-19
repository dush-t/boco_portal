import React from 'react';
import { Filter, ReferenceInput, SelectInput, TextInput, List } from 'react-admin';

const postFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Sport" source="id" reference="sports" allowEmpty alwaysOn>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export default postFilter