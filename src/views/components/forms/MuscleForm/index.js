import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';

const MuscleForm = (props) => {
	const [values, setValues] = React.useState(props.initialValues);

	React.useEffect(() => {
		props.getMuscleGroups();
	}, []);

	const handleChange = (e) => {
		e.persist();
		setValues((prevValues) => ({...prevValues, [e.target.name]: e.target.value}));
	}

	const reset = () => {
		setValues(props.initialValues);
	}

	const submit = (e) => {
		e.preventDefault();
		if (values.name !== '') {
			props.submit(values);
		}
	}

	return (
		<form onSubmit={submit}>
			<div>
				<FormControl>
					<InputLabel htmlFor="muscle_group_id">Muscle Group</InputLabel>
					<NativeSelect
						name="muscle_group_id"
						value={values.muscle_group_id}
						onChange={handleChange}
						style={{ width: 200 }}
						inputProps={{
							name: 'muscle_group_id',
							id: 'muscle_group_id',
						}}
					>
						<option value=''></option>
						{props.muscle_groups.map((muscle) => (
							<option key={muscle.id} value={muscle.id}>{muscle.name}</option>
						))}
					</NativeSelect>
				</FormControl>
			</div>
			<TextField
				name="name"
				label="Muscle"
				type="text" 
				value={values.name}
				onChange={handleChange}
			/>
			<div style={{ textAlign: 'right',  marginTop: 20 }}>
				<Button 
					variant="outlined"
					color="primary"
					fullWidth={true}
					type="submit"
				>
					Save
				</Button>
			</div>
		</form>
	);
}

export default MuscleForm;
