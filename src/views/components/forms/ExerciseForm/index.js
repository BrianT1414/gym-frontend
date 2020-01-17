import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';

const ExerciseForm = (props) => {
	const [values, setValues] = React.useState(props.initialValues);

	React.useEffect(() => {
		props.getMuscleGroups();
		props.getMuscles();
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
		if (values.muscle_group_id && values.muscle_id && values.name) {
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
			<div>
				<FormControl>
					<InputLabel htmlFor="muscle_id">Muscle</InputLabel>
					<NativeSelect
						name="muscle_id"
						value={values.muscle_id}
						onChange={handleChange}
						style={{ width: 200 }}
						inputProps={{
							name: 'muscle_id',
							id: 'muscle_id',
						}}
					>
						<option value=''></option>
						{props.muscles.filter((muscle) => {
							if (values.muscle_group_id) {
								return muscle.muscle_group_id == values.muscle_group_id;
							}
							return true;
						}).map((muscle) => (
							<option key={muscle.id} value={muscle.id}>{muscle.name}</option>
						))}
					</NativeSelect>
				</FormControl>
			</div>
			<div>
				<TextField	
					name="name"
					label="Exercise Name"
					type="text" 
					value={values.name}
					onChange={handleChange}
				/>
			</div>
			<div>
				<TextField
					name="description"
					label="Description"
					type="text" 
					value={values.description ? values.description : ''}
					onChange={handleChange}
				/>
			</div>
			<div style={{ textAlign: 'right',  marginTop: 20 }}>
				<Button 
					variant="outlined"
					onClick={reset}
					fullWidth={true}
					style={{ marginRight: 5 }}
				>
					Reset
				</Button>
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

export default ExerciseForm;
