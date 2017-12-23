import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {catReducer} from './reducers/cat-reducer';
import {dogReducer} from './reducers/dog-reducer';

const store = createStore(combineReducers({
	cat: catReducer,
	dog: dogReducer
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;
