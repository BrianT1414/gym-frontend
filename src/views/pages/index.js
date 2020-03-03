import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TopNav from '../components/TopNav';
import Settings from '../containers/Settings';
import Workout from '../containers/Workout';
import Login from './Login';
import History from '../containers/History';

const Router = (props) => {
  const [title, setTitle] = React.useState('Workout App');

	return (
		<>
			<TopNav title={title} {...props} />
			<div style={{ margin: 5 }}>
				<Switch>
					<Route exact path="/">
						<Workout setTitle={setTitle} {...props} />
					</Route>
					<Route path="/settings">
						<Settings setTitle={setTitle} {...props} />
					</Route>
					<Route path="/workout">
						<Workout setTitle={setTitle} {...props} />
					</Route>
					<Route path="/history">
						<History setTitle={setTitle} {...props} />
					</Route>
					<Route path="/login">
						<Login setTitle={setTitle} {...props} />
					</Route>
				</Switch>
			</div>
		</>
  );
}

export default Router;