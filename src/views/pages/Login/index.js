import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
	const [values, setValues] = React.useState({email: '', password: ''});

	let history = useHistory();

	React.useEffect(() => {
		props.setTitle('Login');
	}, []);
	
	React.useEffect(() => {
		if (Object.keys(props.user).length > 0) {
			history.push('/workout');
		}
	}, [props.user]);

	const submit = (e) => {
		e.preventDefault();
		props.login(values);
	}

	return (
		<form onSubmit={submit} style={{ textAlign: 'center' }}>
			<div>
				<TextField
					label="Email"
					type="email"
					value={values.email}
					onChange={(e) => setValues({...values, email: e.target.value })}
				/>
			</div>
			<div>
				<TextField
					label="Password"
					type="password"
					value={values.password}
					onChange={(e) => setValues({...values, password: e.target.value })}
				/>
			</div>
			<div style={{ marginTop: 10 }}>
				<Button variant="outlined" fullWidth={true} type="submit">Login</Button>
			</div>
		</form>
	);
}

export default Login;
