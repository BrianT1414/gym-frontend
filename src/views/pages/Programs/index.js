import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

const Programs = (props) => {
	let history = useHistory();

	const changePage = (page) => () => {
		history.push(page);
	}

	React.useEffect(() => {
		props.setTitle('Programs');
	}, []);

	return (
		<div style={{ textAlign: 'center' }}>
			<Switch>
				<Route exact path="/programs">
					<>
						<Button variant="outlined" fullWidth={true} style={{ marginTop: 15 }} onClick={changePage('/programs/create')}>New Program</Button>
					</>
				</Route>
				<Route path="/programs/create">
					<ProgramForm
						getMuscleGroups={props.getMuscleGroups}
						muscle_groups={props.muscle_groups}
						setTitle={props.setTitle}
						changePage={changePage}
					/>
				</Route>
			</Switch>
		</div>
	);
}

export default Programs;

const ProgramForm = (props) => {
	const [values, setValues] = React.useState({ title: '', duration: '', frequency: '', cycle_length: 1 });
	const [errors, setErrors] = React.useState({});

	React.useEffect(() => {
		props.setTitle('New Program');
	}, []);

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		});
	}

	const validate = (formValues) => {
		let newErrors = {};
		let required = ['title', 'duration', 'frequency', 'cycle_length'];

		required.forEach(val => {
			if (!formValues[val]) {
				newErrors[val] = 'Required';
			}
		});

		return newErrors;
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		let newErrors = validate(values);
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
		} else {
			setErrors({});
			console.log(values)
		}
	}

	return (
		<form onSubmit={handleSubmit} style={{ marginTop: 15 }}>
			<div className="row">
				<div className="col-4 col-form-label" style={{ textAlign: 'right' }}>
					<label>Title</label>
				</div>
				<input
					name="title"
					className="form-control col-6"
					value={values.title}
					onChange={handleChange}
				/>
				<Error error={errors.title} />
			</div>
			<div className="row">
				<div className="col-4 col-form-label" style={{ textAlign: 'right' }}>
					<label>Duration</label>
				</div>
				<input
					name="duration"
					className="form-control col-2"
					type="number"
					value={values.duration}
					onChange={handleChange}
				/>
				<Error error={errors.duration} />
			</div>
			<div className="row">
				<div className="col-4 col-form-label" style={{ textAlign: 'right' }}>
					<label>Frequency</label>
				</div>
				<input
					name="frequency"
					className="form-control col-2"
					type="number"
					value={values.frequency}
					onChange={handleChange}
				/>
				<Error error={errors.frequency} />
			</div>
			<div className="row">
				<div className="col-4 col-form-label" style={{ textAlign: 'right' }}>
					<label>Cycle Length</label>
				</div>
				<input
					name="cycle_length"
					className="form-control col-2"
					type="number"
					value={values.cycle_length}
					onChange={handleChange}
				/>
				<Error error={errors.cycle_length} />
			</div>
			<div className="row" style={{ position: 'fixed', width: '100%', bottom: 2 }}>
				<div className="offset-9 col-3">
					<button 
						type="submit"
						className="btn btn-outline-primary btn-lg"
					>
						Save
					</button>
				</div>
			</div>
		</form>
	);
}

const Error = (props) => {
	if (props.error) {
		return <div style={{ color: 'red' }}>{props.error}</div>
	}

	return null
}