import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	fab: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	}
}));

const ManageTable = (props) => {
	const theme = useTheme();
	const classes = useStyles();

	return (
		<>
			<Table size="small">
				<TableBody>
					{props.data.map(row => (
						<TableRow key={row.id}>
							<TableCell>{row.name}</TableCell>
							<TableCell align="right">
								<IconButton aria-label="edit" onClick={() => props.edit(row.id)}>
									<EditIcon />
								</IconButton>
								<IconButton aria-label="delete" onClick={() => props.delete(row.id)}>
									<DeleteIcon />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Fab className={classes.fab} onClick={props.add}>
				<AddIcon />
			</Fab>
		</>
	);
}

export default ManageTable;
