import React from 'react';

const Summary = (props) => {
	if (!props.sets) {
		return null;
	}

	const summaries = props.sets.reduce((acc, cur) => {
		if (acc.findIndex((entry) => entry.exercise_name === cur.exercise_name) > -1) {
			const index = acc.findIndex((entry) => entry.exercise_name === cur.exercise_name);

			acc[index] = {
				exercise_name: cur.exercise_name,
				sets: acc[index].sets + 1,
				average_weight: (acc[index].sets * acc[index].average_weight + cur.weight) / (acc[index].sets + 1),
				weight_low: acc[index].weight_low > cur.weight ? cur.weight : acc[index].weight_low,
				weight_high: acc[index].weight_high < cur.weight ? cur.weight : acc[index].weight_high,
				average_reps: (acc[index].sets * acc[index].average_reps + cur.reps) / (acc[index].sets + 1),
				reps_low: acc[index].reps_low > cur.reps ? cur.reps : acc[index].reps_low,
				reps_high: acc[index].reps_high < cur.reps ? cur.reps : acc[index].reps_high,
			}
		} else {
			acc.push({
				exercise_name: cur.exercise_name,
				sets: 1,
				average_weight: cur.weight,
				weight_low: cur.weight,
				weight_high: cur.weight,
				average_reps: cur.reps,
				reps_low: cur.reps,
				reps_high: cur.reps,
			});
		}

		return acc;
	}, []);

	return (
		<div style={{ maxWidth: '100%' }}>
			<h4>Summary</h4>
			<table className="table">
				<thead className="thead-light">
					<tr>
						<th>Exercise</th>
						<th>Sets</th>
						<th>Weight (L/H/A)</th>
						<th>Reps (L/H/A)</th>
					</tr>
				</thead>
				<tbody>
					{summaries.map((summary) => (
						<tr key={summary.exercise_name}>
							<td>{summary.exercise_name}</td>
							<td>{summary.sets}</td>
							<td>{summary.weight_low}/{summary.weight_high}/{Math.round((summary.average_weight + Number.EPSILON) * 100) / 100}</td>
							<td>{summary.reps_low}/{summary.reps_high}/{Math.round((summary.average_reps + Number.EPSILON) * 100) / 100}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Summary;