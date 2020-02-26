import React from 'react';
import Button from '@material-ui/core/Button';

const ChooseWorkout = (props) => {
	React.useEffect(() => {
		props.setTitle('Choose Workout');
	}, []);

	return (
		<>
			<Button 
				variant="outlined"
				onClick={props.startNewWorkout}
				fullWidth={true}
				style={{ marginTop: 15 }}
			>
				Start New Workout
			</Button>
			<Button 
				variant="outlined"
				onClick={props.continueWorkout}
				fullWidth={true}
				style={{ marginTop: 15 }}
			>
				Continue Previous Workout
			</Button>
		</>
	);
}

export default ChooseWorkout;
