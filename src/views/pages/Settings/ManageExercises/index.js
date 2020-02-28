import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ManageTable from '../../../components/ManageTable';
import ExerciseForm from '../../../components/forms/ExerciseForm';
import BreadCrumb from '../../../components/BreadCrumb';

const ManageExercises = (props) => {
	const [edit_id, setEdit] = React.useState(0);
	const [muscle_group_id, setMuscleGroup] = React.useState(props.initialGroup ? props.initialGroup : '');

	React.useEffect(() => {
		props.getMuscleGroups();
		props.getExercises();
		props.setTitle('Manage Exercises');
	}, []);

	const deleteExercise = (i) => {
		if (confirm('Are you sure you want to delete this exercise?')) {
			props.deleteExercise(i);
			setTimeout(() => {
				props.getExercises();
			},500);	
		}
	}

	const goToList = () => {
		props.changePage('/settings/exercises')();
		setTimeout(() => {
			props.getExercises();
		},500);	
	}

	const exerciseToEdit = () => (
		props.exercises.reduce((acc, cur) => {
			if (acc) {
				return acc;
			}
			if (cur.id == edit_id) {
				return cur;
			}
		}, null)
	);

	return (
		<>
			<BreadCrumb />
			<Route exact path="/settings/exercises">	
				<div className="row" style={{ marginTop: 10 }}>
					<div className="col-6 col-form-label" style={{ textAlign: 'right' }}>
						Filter by Group:
					</div>
					<select
						name="muscle_group_id"
						value={muscle_group_id}
						onChange={(e) => {
							setMuscleGroup(e.target.value);
						}}
						style={{ width: 200 }}
						className="form-control col-4"
					>
						<option value="" />
						{props.muscle_groups.map((muscle) => (
							<option key={muscle.id} value={muscle.id}>{muscle.name}</option>
						))}
					</select>
				</div>
				<hr />
				<ManageTable 
					data={props.exercises.filter((exercise) => {
						if (muscle_group_id) {
							return muscle_group_id == exercise.muscle_group_id;
						}
						return true;
					})} 
					add={props.changePage('/settings/exercises/add')}
					edit={(i) => {
						props.changePage('/settings/exercises/edit')();
						setEdit(i);
					}} 
					delete={deleteExercise} 
				/>
			</Route>
			<Route path="/settings/exercises/edit">
				<EditExercise 
					exercise={exerciseToEdit()} 
					updateExercise={props.updateExercise} 
					goToList={goToList}
					getMuscleGroups={props.getMuscleGroups}
					muscle_groups={props.muscle_groups}
					muscles={props.muscles}
					getMuscles={props.getMuscles}
				/>
			</Route>
			<Route path="/settings/exercises/add">
				<div style={{ textAlign: 'center' }}>
					<ExerciseForm 
						submit={(values) => {props.createExercise(values); goToList()}}
						initialValues={{
							name: '',
							muscle_group_id: '',
							muscle_id: '',
							description: ''
						}}
						getMuscleGroups={props.getMuscleGroups}
						muscle_groups={props.muscle_groups}
						muscles={props.muscles}
						getMuscles={props.getMuscles}
					/>
				</div>
			</Route>
		</>
	);
}

export default ManageExercises;

const EditExercise = (props) => {
	if (props.exercise) {
		return (
			<div style={{ textAlign: 'center' }}>
				<ExerciseForm 
					submit={(values) => {props.updateExercise(props.exercise.id, values); props.goToList()}}
					initialValues={props.exercise}
					getMuscleGroups={props.getMuscleGroups}
					muscle_groups={props.muscle_groups}
					muscles={props.muscles}
					getMuscles={props.getMuscles}
				/>
			</div>
		);
	} else {
		return null;
	}
}
