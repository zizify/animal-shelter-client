import {createStore, combineReducers} from 'redux';

import {catReducer} from './reducers/cat-reducer';
import {dogReducer} from './reducers/dog-reducer';

const store = createStore(combineReducers({
	cat: catReducer,
	dog: dogReducer
}));

export default store;
