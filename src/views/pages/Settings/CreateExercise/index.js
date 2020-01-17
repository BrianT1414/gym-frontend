import React from 'react';
import CreateExerciseForm from '../../components/forms/CreateExercise';

const CreateExercise = (props) => {
	React.useEffect(() => {
		props.setTitle('Create Exercise');
	}, []);

	return (
		<div style={{ textAlign: 'center' }}>
			<CreateExerciseForm 
				muscle_groups={props.muscle_groups}
				getMuscleGroups={props.getMuscleGroups}
				createExercise={props.createExercise}
			/>
		</div>	
	);
}

export default CreateExercise;
