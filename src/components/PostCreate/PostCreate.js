import React, { Fragment } from 'react';
import { Create, SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, BooleanInput, FormDataConsumer, AutocompleteInput } from 'react-admin'

const getSportLayoutNumber = (sport_id) => {
    const layoutArray1 = [1]
    const layoutArray2 = [2]
    if (layoutArray1.includes(sport_id)) {
        return 1
    } else if (layoutArray2.includes(sport_id)) {
        return 2
    }
}

const postCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
        <DisabledInput source="id" />
            <ReferenceInput label="Sport" source="sport" reference="sports">
                <SelectInput optionText="name" /> 
            </ReferenceInput>
            <TextInput source="venue" />
            <SelectInput source="gender" choices={[
                {id: 'M', name: 'M'},
                {id: 'F', name: 'F'}
            ]} />
            <TextInput source="round_name" />
            <TextInput source="round_type" />
            <BooleanInput source="is_score" />
            <FormDataConsumer>
                {({ formData, ...rest }) => formData.is_score && 
                    <Fragment>
                        <TextInput source="score1" {...rest} />
                        <TextInput source="score2" {...rest} style={{"marginLeft": "30px"}} />
                    </Fragment>
                }
            </FormDataConsumer>
            <FormDataConsumer>
                {({ formData, ...rest }) => getSportLayoutNumber(formData.sport) === 1 &&
                    <Fragment>
                        <ReferenceInput label="Team 1" source="team1" reference="colleges">
                            <AutocompleteInput optionText="short_name"/>
                        </ReferenceInput>
                        <ReferenceInput label="Team 2" source="team2" reference="colleges">
                            <AutocompleteInput optionText="name"/>
                        </ReferenceInput>
                    </Fragment>
                }
            </FormDataConsumer>
        </SimpleForm>
    </Create>
);

export default postCreate;