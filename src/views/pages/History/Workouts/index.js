import React from 'react';
import AscIcon from '@material-ui/icons/ArrowDropUp';
import DescIcon from '@material-ui/icons/ArrowDropDown';
import BreadCrumb from '../../../components/BreadCrumb';

const Workouts = (props) => {
	const [dateAsc, setDateAsc] = React.useState(false);

	React.useEffect(() => {
		props.getWorkouts();
		props.setTitle('Past Workouts');
	}, []);

	const getWorkoutName = (row) => {
		return 'N/A';
	}

	const getDate = (row) => {
		let d = new Date(Date.parse(row.created_at));

		let month = '' + (d.getMonth() + 1);
		month = month.length > 1 ? month : '0' + month;
		let day = '' + d.getDate();
		day = day.length > 1 ? day : '0' + day;
		const year = d.getFullYear();

		return [month, day, year].join('-');
	}

	return (
		<>	
			<BreadCrumb />
			<table className="table table-hover">
        <thead className="thead-light">
          <tr>
						<th onClick={() => setDateAsc(!dateAsc)}>Date {dateAsc ? <AscIcon /> : <DescIcon />}</th>
            <th>Unit</th>
          </tr>
        </thead>
				<tbody>
					{props.workouts.sort((a, b) => {
						if (dateAsc) {
							return new Date(a.created_at) - new Date(b.created_at);
						} else {
							return new Date(b.created_at) - new Date(a.created_at);
						}
					}).map(row => (
						<tr key={row.id} onClick={() => props.goToWorkout(row.id)}>
							<td>{getDate(row)}</td>
							<td>{getWorkoutName(row)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default Workouts;
