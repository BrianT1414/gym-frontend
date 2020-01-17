import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const MuscleGroupForm = (props) => {
	const [values, setValues] = React.useState(props.initialValues);

	const handleChange = (e) => {
		e.persist();
		setValues((prevValues) => ({...prevValues, [e.target.name]: e.target.value}));
	}

	const submit = (e) => {
		e.preventDefault();
		if (values.name !== '') {
			props.submit(values);
		}
	}

	return (
		<form onSubmit={submit}>
			<TextField
				name="name"
				label="Muscle Group"
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

export default MuscleGroupForm;
