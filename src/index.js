import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/containers/App';
import createStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const AppWrapper = () => {
	const store = createStore();

	return (
		<BrowserRouter basename="gym-app">
			<Provider store={store}>
				<App/>
			</Provider>
		</BrowserRouter>
	);
}

ReactDOM.render(<AppWrapper/>, document.getElementById('root'));
