import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Workouts = (props) => {
	React.useEffect(() => {
		props.getWorkouts();
	}, []);

	const getWorkoutName = (row) => {
		return 'N/A';
	}

	const getDate = (row) => {
		let d = new Date(Date.parse(row.created_at));

		const month = '' + (d.getMonth() + 1);
		const day = '' + d.getDate();
		const year = d.getFullYear();

		return [month, day, year].join('-');
	}

	return (
		<>	
			<Table size="small">
				<TableBody>
					{props.workouts.map(row => (
						<TableRow key={row.id} onClick={() => props.goToWorkout(row.id)}>
							<TableCell>{getDate(row)}</TableCell>
							<TableCell>{getWorkoutName(row)}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
}

export default Workouts;
