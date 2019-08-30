import React, { Fragment } from 'react';
import { Edit, SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, BooleanInput, AutocompleteInput, FormDataConsumer } from 'react-admin'
import DateFnsUtils from '@date-io/date-fns';
import { DateTimeInput } from 'react-admin-date-inputs';

// Has to be hardcoded before the fest, for performance reasons.
const getSportLayoutNumber = (sport_id) => {
    const layoutArray1 = [1]
    const layoutArray2 = [2]
    if (layoutArray1.includes(sport_id)) {
        return 1
    } else if (layoutArray2.includes(sport_id)) {
        return 2
    }
}


const postEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
           <DisabledInput source="id" />
            <ReferenceInput label="Sport" source="sport" reference="sports">
                <SelectInput optionText="name" /> 
            </ReferenceInput>
            <TextInput source="venue" />
            <DateTimeInput 
                source="timestamp" 
                label="Timing" 
                options={{ 
                    format: 'dd/MM/yyyy, HH:mm', 
                    ampm: false, 
                    clearable: true,
                    variant: "inline"
                }} />
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
            <BooleanInput label="Result Decided" source="resultDecided" />

            <FormDataConsumer>
                {({ formData, ...rest }) => formData.resultDecided && 
                    <Fragment>
                        <ReferenceInput label="Winner 1" source="winner1" reference="colleges">
                            <AutocompleteInput optionText="short_name"/>
                        </ReferenceInput>
                        <FormDataConsumer>
                            {({ formData, ...rest }) => getSportLayoutNumber(formData.sport) === 2 &&
                                <Fragment>
                                    <ReferenceInput label="Winner 2" source="winner2" reference="colleges">
                                        <AutocompleteInput optionText="short_name"/>
                                    </ReferenceInput>
                                    <ReferenceInput label="Winner 3" source="winner3" reference="colleges">
                                        <AutocompleteInput optionText="short_name"/>
                                    </ReferenceInput>
                                </Fragment>
                            }
                        </FormDataConsumer>
                    </Fragment>
                }
            </FormDataConsumer>
            
        </SimpleForm>
    </Edit>
);

export default postEdit;

// Keep optionText equal to the field you wanna populate from in the json response.