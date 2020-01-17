import React from 'react';
import CreateMuscleForm from '../../components/forms/CreateMuscleGroup';

const CreateMuscle = (props) => {
	React.useEffect(() => {
		props.setTitle('Create Muscle Group');
	}, []);

	return (
		<div style={{ textAlign: 'center' }}>
			<CreateMuscleForm createMuscleGroup={props.createMuscleGroup} />
		</div>
	);
}

export default CreateMuscle;
