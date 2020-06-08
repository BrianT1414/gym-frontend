import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import ManageMuscleGroups from './ManageMuscleGroups';
import ManageMuscles from './ManageMuscles';
import ManageExercises from './ManageExercises';

const Settings = (props) => {
	let history = useHistory();

	const changePage = (page) => () => {
		history.push(page);
	}

	React.useEffect(() => {
		props.setTitle('Settings');
	}, []);

	return (
		<div style={{ textAlign: 'center' }}>
			<Switch>
				<Route exact path="/settings">
					<>
						<Button variant="outlined" fullWidth={true} style={{ marginTop: 15 }} onClick={changePage('/settings/muscle-groups')}>Manage Muscle Groups</Button>
						<Button variant="outlined" fullWidth={true} style={{ marginTop: 15 }} onClick={changePage('/settings/muscles')}>Manage Muscles</Button>
						<Button variant="outlined" fullWidth={true} style={{ marginTop: 15 }} onClick={changePage('/settings/exercises')}>Manage Exercise</Button>
					</>
				</Route>
				<Route path="/settings/muscle-groups">
					<ManageMuscleGroups 
						getMuscleGroups={props.getMuscleGroups}
						createMuscleGroup={props.createMuscleGroup}
						updateMuscleGroup={props.updateMuscleGroup}
						deleteMuscleGroup={props.deleteMuscleGroup}
						muscle_groups={props.muscle_groups}
						setTitle={props.setTitle}
						changePage={changePage}
					/>
				</Route>
				<Route path="/settings/muscles">
					<ManageMuscles
						getMuscles={props.getMuscles}
						createMuscle={props.createMuscle}
						updateMuscle={props.updateMuscle}
						deleteMuscle={props.deleteMuscle}
						muscles={props.muscles}
						setTitle={props.setTitle}
						changePage={changePage}
						muscle_groups={props.muscle_groups}
						getMuscleGroups={props.getMuscleGroups}
					/>
				</Route>
				<Route path="/settings/exercises">
					<ManageExercises
						getExercises={props.getExercises}
						createExercise={props.createExercise}
						updateExercise={props.updateExercise}
						deleteExercise={props.deleteExercise}
						exercises={props.exercises}
						setTitle={props.setTitle}
						changePage={changePage}
						muscle_groups={props.muscle_groups}
						getMuscleGroups={props.getMuscleGroups}
						muscles={props.muscles}
						getMuscles={props.getMuscles}
					/>
				</Route>
			</Switch>
		</div>
	);
}

export default Settings;
