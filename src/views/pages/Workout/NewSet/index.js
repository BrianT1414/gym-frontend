import React from 'react';
import SetForm from '../../../components/forms/SetForm';

const emptyFormValues = {
	exercise_id: '',
	reps: '',
	weight: ''
}

const NewSet = (props) => {
	const [set, setSet] = React.useState(-1);

	React.useEffect(() => {
		props.setTitle('Workout');
		props.getSets(props.workout.id);
	}, []);

	React.useEffect(() => {
		setSet(-1);
	}, [props.sets.length]);

	const goBack = () => {
		if (set !== -1) {
			setSet((prev) => prev - 1);
		} else {
			setSet(props.sets.length - 1);
		}
	}

	const goForward = () => {
		if (set == props.sets.length -1) {
			setSet(-1);
		} else {
			setSet(set + 1);
		}
	}

	const addWorkoutId = (values) => {
		return {...values, workout_id: props.workout.id};
	}

	const saveNew = (values) => {
		props.createSet(addWorkoutId(values));
		props.clearSet();
		setTimeout(() => {
			props.getSets(props.workout.id);
		}, 200);
	}

	const update = (values) => {
		props.updateSet(props.sets[set].id, addWorkoutId(values));
		setTimeout(() => {
			props.getSets(props.workout.id);
		}, 200);
	}
	
	return (
		<>
			<div style={set === -1 ? {} : { display: 'none' }}>
				<SetForm
					getMuscleGroups={props.getMuscleGroups}
					getExercises={props.getExercises}
					submit={saveNew}
					muscle_groups={props.muscle_groups}
					muscles={props.muscles}
					getMuscles={props.getMuscles}
					exercises={props.exercises}
					initialValues={emptyFormValues}
					showBack={props.sets.length > 0}
					back={goBack}
					showForward={false}
					showNew={false}
					showSuggestLast={true}
					getSuggestions={props.getSuggestions}
					suggestions={props.suggestions}
					clearSuggestions={props.clearSuggestions}
				/>
			</div>
			{set !== -1 ?
				<EditSet
					set={props.sets[set]}
					getMuscleGroups={props.getMuscleGroups}
					getExercises={props.getExercises}
					submit={update}
					muscle_groups={props.muscle_groups}
					muscles={props.muscles}
					getMuscles={props.getMuscles}
					exercises={props.exercises}
					showBack={set !== 0}
					back={goBack}
					showForward={true}
					forward={goForward}
					showNew={true}
					newSet={() => setSet(-1)}
					showSuggestLast={false}
					suggestions={{}}
				/>
			: null}
		</>
	);
}

export default NewSet;

const EditSet = (props) => {
	const getInitial = () => {
		const exercise = props.exercises.reduce((acc,cur) => {
			if (acc) {return acc};
			if (cur.id == props.set.exercise_id) {
				return cur;
			}
		},null);
		if (exercise) {
			return {
				muscle_group_id: exercise.muscle_group_id,
				muscle_id: exercise.muscle_id
			}
		}
		return {
			muscle_group_id: '',
			muscle_id: ''
		}
	}

	if (props.set) {
		const initial = getInitial();
		return (
			<SetForm 
				initialValues={props.set}
				initialGroup={initial.muscle_group_id}
				initialMuscle={initial.muscle_id}
				{...props}
			/>
		);
	} else {
		return null;
	}
}
