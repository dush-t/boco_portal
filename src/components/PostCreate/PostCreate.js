import React, { Fragment } from 'react';
import { Create, SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, BooleanInput, FormDataConsumer, AutocompleteInput } from 'react-admin'
import { Typography } from '@material-ui/core';
import { DateTimeInput } from 'react-admin-date-inputs';

const getSportLayoutNumber = (sport_id) => {
    const layoutArray2 = [2, 9, 8, 7]
    if (layoutArray2.includes(sport_id)) {
        return 2
    } else {
        return 1
    }
}

const Aside = () => (
    <div style={{ width: 200, margin: '1em' }}>
        <Typography variant="title">Note</Typography>
        <Typography variant="body1">
            Enter the information and click on save. You can add more data after that.
        </Typography>
    </div>
);

const postCreate = (props) => (
    <Create {...props} aside={<Aside />}>
        <SimpleForm>
        <DisabledInput source="id" />
            <ReferenceInput label="Sport" source="sport" reference="sports">
                <SelectInput optionText="name" /> 
            </ReferenceInput>
            <ReferenceInput label="Venue" source="venue" reference="venues">
                <SelectInput optionText="name" /> 
            </ReferenceInput>
            {/* <TextInput source="venue" /> */}
            <DateTimeInput label="Scheduled time" source="timestamp" />
            <SelectInput source="gender" choices={[
                {id: 'M', name: 'M'},
                {id: 'F', name: 'F'},
                {id: 'B', name: 'B'}
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
                            <AutocompleteInput optionText="short_name"/>
                        </ReferenceInput>
                    </Fragment>
                }
            </FormDataConsumer>
        </SimpleForm>
    </Create>
);

export default postCreate;