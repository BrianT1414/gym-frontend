import React from 'react';

const ViewWorkout = (props) => {
	const [types, setTypes] = React.useState([]);
	const [exercises, setExercises] = React.useState([]);
	const [formatted, setFormatted] = React.useState([]);

	React.useEffect(() => {
		console.log('mount')
	},[])

	React.useEffect(() => {
		if (props.workout.id) {
			props.setTitle(getDate(props.workout));
			console.log(props.workout);
			formatByExercise();
		}
	}, [props.workout.id]);

	const getDate = (workout) => {
		let d = new Date(Date.parse(workout.created_at));

		const month = '' + (d.getMonth() + 1);
		const day = '' + d.getDate();
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
				console.log(prev)
				if (!prev.includes(newSet.muscle_group)) {
					return [...prev, newSet.muscle_group]
				}
				return prev;
			});

			//if (!exercises.includes(newSet.exercise_name)) {
			//setExercises(prev => [...prev, newSet.exercise_name]);
			//}

			return newSet;
		}));
	}

	return (
		<>
			{types.map((type) => (
				<div key={type}>
					<h3 style={{ margin: 5 }}>{type}</h3>
					<table className="table">
						<tbody>
							{formatted.filter((set) => (
								set.muscle_group == type
							)).map((set) => (
								<tr key={set.id}>
									<td>{set.muscle_name}</td>
									<td>{set.exercise_name}</td>
									<td>{set.weight + ' lbs'}</td>
									<td>{'x ' + set.reps}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			))}
		</>
	);
}

export default ViewWorkout;
