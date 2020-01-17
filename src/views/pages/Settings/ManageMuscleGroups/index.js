import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import ManageTable from '../../../components/ManageTable';
import MuscleGroupForm from '../../../components/forms/MuscleGroupForm';

const ManageMuscleGroups = (props) => {
	const [edit_id, setEdit] = React.useState(0);

	React.useEffect(() => {
		props.getMuscleGroups();
		props.setTitle('Manage Groups');
	}, []);

	const deleteGroup = (i) => {
		if (confirm('Are you sure you want to delete this muscle group?')) {
			props.deleteMuscleGroup(i);
			setTimeout(() => {
				props.getMuscleGroups();
			},500);	
		}
	}

	const goToList = () => {
		props.changePage('/settings/muscle-groups')();
		setTimeout(() => {
			props.getMuscleGroups();
		},500);	
	}

	const groupToEdit = () => (
		props.muscle_groups.reduce((acc, cur) => {
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
			<Route exact path="/settings/muscle-groups">
				<ManageTable 
					data={props.muscle_groups} 
					add={props.changePage('/settings/muscle-groups/add')}
					edit={(i) => {
						props.changePage('/settings/muscle-groups/edit')();
						setEdit(i);
					}} 
					delete={deleteGroup} 
				/>
			</Route>
			<Route path="/settings/muscle-groups/edit">
				<EditGroup group={groupToEdit()} updateMuscleGroup={props.updateMuscleGroup} goToList={goToList} />
			</Route>
			<Route path="/settings/muscle-groups/add">
				<div style={{ textAlign: 'center' }}>
					<MuscleGroupForm 
						submit={(values) => {props.createMuscleGroup(values); goToList()}}
						initialValues={{ name: '' }}
					/>
				</div>
			</Route>
		</>
	);
}

export default ManageMuscleGroups;

const EditGroup = (props) => {
	if (props.group) {
		return (
			<div style={{ textAlign: 'center' }}>
				<MuscleGroupForm 
					submit={(values) => {props.updateMuscleGroup(props.group.id, values); props.goToList()}}
					initialValues={props.group}
				/>
			</div>
		);
	} else {
		return null;
	}
}
