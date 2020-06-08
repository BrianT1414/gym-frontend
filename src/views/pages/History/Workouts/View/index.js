import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Dialog from '@material-ui/core/Dialog';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useParams } from "react-router-dom";
import BreadCrumb from '../../../../components/BreadCrumb';
import SetForm from '../../../../components/forms/SetForm';
import Summary from './Summary.js';

const View = (props) => {
	const [types, setTypes] = React.useState([]);
	const [editSet, setEditSet] = React.useState(null);
	const [formatted, setFormatted] = React.useState([]);
	const [selectedSort, setSelectedSort] = React.useState('order');

  let params = useParams();

	React.useEffect(() => {
		if (!props.workout || !props.workout.id || props.workout.id !== params.id) {
			props.getWorkout(params.id);
		}

		return () => {
			props.clearWorkout();
		}
	},[])

	React.useEffect(() => {
		if (props.workout.id) {
			props.setTitle(getDate(props.workout));
			formatByExercise();
		}
	}, [props.workout.id]);

	const getDate = (workout) => {
		let d = new Date(Date.parse(workout.created_at));

		let month = '' + (d.getMonth() + 1);
		month = month.length > 1 ? month : '0' + month;
		let day = '' + d.getDate();
		day = day.length > 1 ? day : '0' + day;
		const year = d.getFullYear();

		return [month, day, year].join('-');
	}

	const formatByExercise = () => {
		setFormatted(props.workout.sets.map((set) => {
			let newSet = {...set};

			newSet.exercise_name = set.exercise.name;
			newSet.muscle_name = set.exercise.muscle ? set.exercise.muscle.name : '';
			newSet.muscle_group = set.exercise.muscle_group.name;
			delete newSet.exercise;

			setTypes(prev => {
				if (!prev.includes(newSet.muscle_group)) {
					return [...prev, newSet.muscle_group]
				}
				return prev;
			});

			return newSet;
		}));
	}

	const handleSort = (e) => {
		setSelectedSort(e.target.value);
	}

	return (
		<>
			<BreadCrumb />
			<hr/>
			<Summary sets={props.workout.sets} />
			<hr/>
			<h4>Sets</h4>
			<FormControl component="fieldset">
				<FormLabel component="legend">Sort By</FormLabel>
				<RadioGroup aria-label="sort" name="sort1" value={selectedSort} onChange={handleSort} row>
					<FormControlLabel value="order" control={<Radio />} label="Chronological" />
					<FormControlLabel value="group" control={<Radio />} label="Muscle Group" />
				</RadioGroup>
			</FormControl>
			{selectedSort === 'group' ? types.map((type) => (
				<div key={type}>
					<h3 style={{ margin: 5 }}>{type}</h3>
					<table className="table table-hover">
						<thead className="thead-light">
							<tr>
								<th>Muscle</th>
								<th>Exercise</th>
								<th>Reps</th>
								<th>Weight</th>
							</tr>
						</thead>
						<tbody>
							{formatted.filter((set) => (
								set.muscle_group == type
							)).map((set) => (
								<tr key={set.id}>
									<td>{set.muscle_name}</td>
									<td>{set.exercise_name}</td>
									<td>{set.reps}</td>
									<td>{set.weight}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)): null}
			{selectedSort === 'order' ? 
				<table className="table table-hover">
					<thead className="thead-light">
						<tr>
							<th>Muscle</th>
							<th>Exercise</th>
							<th>Reps</th>
							<th>Weight</th>
						</tr>
					</thead>
					<tbody>
						{formatted && formatted.map((set) => (
							<tr key={set.id} onClick={() => setEditSet(set.id)}>
								<td>{set.muscle_group}</td>
								<td>{set.exercise_name}</td>
								<td>{set.reps}</td>
								<td>{set.weight}</td>
							</tr>
						))}
					</tbody>
				</table>
			: null}
			{/* <EditSet 
				set={props.workout.sets && props.workout.sets.find(x => x.id === editSet)} 
				open={!!editSet}
				handleClose={() => setEditSet(null)} 
				getMuscleGroups={props.getMuscleGroups}
				getExercises={props.getExercises}
				submit={props.update}
				muscle_groups={props.muscle_groups}
				muscles={props.muscles}
				getMuscles={props.getMuscles}
				exercises={props.exercises}
			/> */}
		</>
	);
}

export default View

// const EditSet = (props) => {
// 	const getInitial = () => {
// 		const exercise = props.exercises.reduce((acc,cur) => {
// 			if (acc) {return acc};
// 			if (cur.id == props.set.exercise_id) {
// 				return cur;
// 			}
// 		},null);
// 		if (exercise) {
// 			return {
// 				muscle_group_id: exercise.muscle_group_id,
// 				muscle_id: exercise.muscle_id
// 			}
// 		}
// 		return {
// 			muscle_group_id: '',
// 			muscle_id: ''
// 		}
// 	}

// 	if (props.set) {
// 		const initial = getInitial();

// 		return (
// 			<Dialog onClose={props.handleClose} open={props.open}>
// 				<SetForm 
// 					initialValues={props.set}
// 					initialGroup={initial.muscle_group_id}
// 					initialMuscle={initial.muscle_id}
// 					getMuscleGroups={props.getMuscleGroups}
// 					getExercises={props.getExercises}
// 					submit={props.update}
// 					muscle_groups={props.muscle_groups}
// 					muscles={props.muscles}
// 					getMuscles={props.getMuscles}
// 					exercises={props.exercises}
// 				/>
// 			</Dialog>
// 		);
// 	} else {
// 		return null;
// 	}
// }