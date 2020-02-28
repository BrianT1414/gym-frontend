import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import ManageTable from '../../../components/ManageTable';
import MuscleForm from '../../../components/forms/MuscleForm';
import BreadCrumb from '../../../components/BreadCrumb';

const ManageMuscles = (props) => {
	const [edit_id, setEdit] = React.useState(0);
	const [muscle_group_id, setMuscleGroup] = React.useState(props.initialGroup ? props.initialGroup : '');

	React.useEffect(() => {
		props.getMuscleGroups();
		props.getMuscles();
		props.setTitle('Manage Muscles');
	}, []);

	const deleteMuscle = (i) => {
		if (confirm('Are you sure you want to delete this muscle?')) {
			props.deleteMuscle(i);
			setTimeout(() => {
				props.getMuscles();
			},500);	
		}
	}

	const goToList = () => {
		props.changePage('/settings/muscles')();
		setTimeout(() => {
			props.getMuscles();
		},500);	
	}

	const muscleToEdit = () => (
		props.muscles.reduce((acc, cur) => {
			if (acc) {
				return acc;
			}
			if (cur.id == edit_id) {
				return cur;
			}
		}, null)
	);

	return (
		<>
			<BreadCrumb />
			<Route exact path="/settings/muscles">
				<div className="row" style={{ marginTop: 10 }}>
					<div className="col-6 col-form-label" style={{ textAlign: 'right' }}>
						Filter by Group:
					</div>
					<select
						name="muscle_group_id"
						value={muscle_group_id}
						onChange={(e) => {
							setMuscleGroup(e.target.value);
						}}
						style={{ width: 200 }}
						className="form-control col-4"
					>
						<option value="" />
						{props.muscle_groups.map((muscle) => (
							<option key={muscle.id} value={muscle.id}>{muscle.name}</option>
						))}
					</select>
				</div>
				<hr />
				<ManageTable 
					data={props.muscles.filter((muscle) => {
						if (muscle_group_id) {
							return muscle_group_id == muscle.muscle_group_id;
						}
						return true;
					})} 
					add={props.changePage('/settings/muscles/add')}
					edit={(i) => {
						props.changePage('/settings/muscles/edit')();
						setEdit(i);
					}} 
					delete={deleteMuscle} 
				/>
			</Route>
			<Route path="/settings/muscles/edit">
				<EditMuscle 
					muscle={muscleToEdit()} 
					updateMuscle={props.updateMuscle} 
					goToList={goToList}
					getMuscleGroups={props.getMuscleGroups}
					muscle_groups={props.muscle_groups}
				/>
			</Route>
			<Route path="/settings/muscles/add">
				<div style={{ textAlign: 'center' }}>
					<MuscleForm 
						submit={(values) => {props.createMuscle(values); goToList()}}
						initialValues={{
							name: '',
							muscle_group_id: ''
						}}
						getMuscleGroups={props.getMuscleGroups}
						muscle_groups={props.muscle_groups}
					/>
				</div>
			</Route>
		</>
	);
}

export default ManageMuscles;

const EditMuscle = (props) => {
	if (props.muscle) {
		return (
			<div style={{ textAlign: 'center' }}>
				<MuscleForm 
					submit={(values) => {props.updateMuscle(props.muscle.id, values); props.goToList()}}
					initialValues={props.muscle}
					getMuscleGroups={props.getMuscleGroups}
					muscle_groups={props.muscle_groups}
				/>
			</div>
		);
	} else {
		return null;
	}
}
