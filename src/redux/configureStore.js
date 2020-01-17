import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './middleware/promise-middleware';
import reducers from './reducers';

export default function(data) {
	//const condensed = condenseReducers(reducers);
	const reducer = combineReducers(reducers)

	const store = createStore(
		reducer,
		applyMiddleware(thunk, promiseMiddleware)
	)

	return store
}

