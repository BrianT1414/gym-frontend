import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import LeftArrow from '@material-ui/icons/ChevronLeft';
import RightArrow from '@material-ui/icons/ChevronRight';
import Plus from '@material-ui/icons/Add';

const SetForm = (props) => {
	const [muscle_group_id, setMuscleGroup] = React.useState(() => props.initialGroup ? props.initialGroup : '');
	const [muscle_id, setMuscle] = React.useState(props.initialMuscle ? props.initialMuscle : '');
	const [values, setValues] = React.useState(props.initialValues);
	const [suggestions, setSuggestions] = React.useState({reps: null, weight: null});

	React.useEffect(() => {
		props.getMuscleGroups();
		props.getMuscles();
		props.getExercises();
	}, []);

	React.useEffect(() => {
		if (muscle_group_id || muscle_id) {
			props.getExercises();
		}
	}, [muscle_group_id, muscle_id]);

	React.useEffect(() => {
		setValues(props.initialValues);
		setMuscleGroup(props.initialGroup);
		setMuscle(props.initialMuscle);
	}, [props.initialValues]);

	React.useEffect(() => {
		if (props.suggestions) {
			setSuggestions({reps: props.suggestions.reps, weight: props.suggestions.weight});
		}
	}, [props.suggestions.reps, props.suggestions.weight]);

	const handleChange = (e) => {
		e.persist();
		setValues((prevValues) => ({...prevValues, [e.target.name]: e.target.value}));
	}

	const quickSetReps = (value) => () => {
		setValues((prevValues) => ({...prevValues, reps: value}));
	}

	const quickSetWeight = (value) => {
		setValues((prevValues) => ({...prevValues, weight: value}));
	}

	const repAlreadyListed = () => {
		return suggestions.reps == 5 || suggestions.reps == 10 || suggestions.reps == 12;
	}

	const reset = (e) => {
		e.preventDefault();
		setValues(props.initialValues);
		setMuscleGroup(props.initialGroup ? props.initialGroup : '');
		setMuscle(props.initialMuscle ? props.initialMuscle : '');
		setSuggestions({reps: null, weight: null});
	}

	const submit = (e) => {
		e.preventDefault();
		if (values.exercise_id && values.reps && values.weight) {
			props.submit(values);
			setValues(props.initialValues);
			setMuscleGroup(props.initialGroup ? props.initialGroup : '');
			setMuscle(props.initialMuscle ? props.initialMuscle : '');
			setSuggestions({reps: null, weight: null});
		}
	}

	return (
		<form onSubmit={submit} style={{ marginTop: 15 }}>
			<div className="row">
				<div className="col-4 col-form-label" style={{ textAlign: 'right' }}>
					<label>Group</label>
				</div>
				<select
					name="muscle_group_id"
					value={muscle_group_id}
					onChange={(e) => {
						setMuscleGroup(e.target.value);
						setMuscle('');
					}}
					style={{ width: 200 }}
					className="form-control col-4"
				>
					<option value="" />
					{props.muscle_groups.map((muscle) => (
						<option key={muscle.id} value={muscle.id}>{muscle.name}</option>
					))}
				</select>
				<div className="col-4">
					<button 
						onClick={reset}
						className="btn btn-outline-secondary"
					>
						Reset
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-4 col-form-label" style={{ textAlign: 'right' }}>
					<label>Muscle</label>
				</div>
				<select
					name="muscle_id"
					value={muscle_id}
					onChange={(e) => setMuscle(e.target.value)}
					style={{ width: 200 }}
					className="form-control col-4"
				>
					<option value=''></option>
					{props.muscles.filter((muscle) => {
						if (muscle_group_id) {
							return muscle.muscle_group_id == muscle_group_id;
						}
						return true;
					}).map((muscle) => (
						<option key={muscle.id} value={muscle.id}>{muscle.name}</option>
					))}
				</select>
			</div>
			<div className="row">
				<div className="col-4 col-form-label" style={{ textAlign: 'right' }}>
					<label>Exercise</label>
				</div>
				<select
					name="exercise_id"
					value={values.exercise_id}
					onChange={(e) => {
						handleChange(e);
						if (props.showSuggestLast && e.target.value) {
							props.getSuggestions(e.target.value);
						}
					}}
					className="form-control col-4"
					style={{ width: 200 }}
				>
					<option value="" />
					{props.exercises.filter((exercise) => {
						if (muscle_group_id) {
							return exercise.muscle_group_id == muscle_group_id;
						}
						return true;
					}).filter((exercise) => {
						if (muscle_id) {
							return exercise.muscle_id == muscle_id;
						}
						return true;
					}).map((exercise) => (
						<option key={exercise.id} value={exercise.id}>{exercise.name}</option>
					))}
				</select>
			</div>
			<div className="row">
				<div className="col-4 col-form-label" style={{ textAlign: 'right' }}>
					<label>Reps</label>
				</div>
				<input
					name="reps"
					className="form-control col-2"
					type="number" 
					value={values.reps}
					onChange={handleChange}
				/>
				<div className="col-6">
					{props.showSuggestLast && suggestions.reps && !repAlreadyListed() ?
						<button 
							type="button" 
							onClick={() => quickSetReps(suggestions.reps)()} 
							className="btn btn-primary" 
							style={{ marginRight: 2 }}
						>
							{suggestions.reps}
						</button>
					: null}
					<button 
						type="button" 
						onClick={quickSetReps(5)} 
						className={suggestions.reps == 5 ? "btn btn-primary" : "btn btn-secondary"}
						style={{ marginRight: 2 }}
					>
						5
					</button>
					<button 
						type="button" 
						onClick={quickSetReps(10)} 
						className={suggestions.reps == 10 ? "btn btn-primary" : "btn btn-secondary"}
						style={{ marginRight: 2 }}
					>
						10
					</button>
					<button 
						type="button" 
						onClick={quickSetReps(12)} 
						className={suggestions.reps == 12 ? "btn btn-primary" : "btn btn-secondary"}
					>
						12
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-4 col-form-label" style={{ textAlign: 'right' }}>
					<label>Weight</label>
				</div>
				<input
					name="weight"
					className="form-control col-2"
					type="number" 
					value={values.weight}
					onChange={handleChange}
				/>
				<div className="col-6">
					{props.showSuggestLast && suggestions.weight ?
						<button 
							type="button" 
							onClick={() => quickSetWeight(suggestions.weight)} 
							className="btn btn-primary" 
							style={{ marginRight: 2 }}
						>
							{suggestions.weight}
						</button>
					: null}
				</div>
			</div>
			<div className="row" style={{ position: 'fixed', width: '100%', bottom: 2 }}>
				<div className="col-3">
					{props.showBack ?
						<button 
							onClick={(e) => {e.preventDefault(); props.back();}}
							className="btn btn-outline-secondary btn-lg"
						>
							<LeftArrow />
						</button>
				: null}
				</div>
				<div className="col-3">
					{props.showForward ?
						<button 
							onClick={(e) => {e.preventDefault(); props.forward();}}
							className="btn btn-outline-secondary btn-lg"
						>
							<RightArrow />
						</button>
				: null}
				</div>
				<div className="col-3">
					{props.showNew ?
						<button 
							onClick={(e) => {e.preventDefault(); props.newSet();}}
							className="btn btn-outline-secondary btn-lg"
						>
							<Plus />
						</button>
				: null}
				</div>
				<div className="col-3">
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

export default SetForm;
