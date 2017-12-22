import dogActions from '../actions/index';

const initialState = {
	loading: false,
	error: null,
	data: null
};

export const dogReducer = (state=initialState, action) => {
	if (action.type === dogActions.FETCH_DOG_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			data: action.dog
		});
	}

	else if (action.type === dogActions.FETCH_DOG_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error,
		});
	}

	else if (action.type === dogActions.FETCH_DOG_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null,
			data: null
		});
	}

	else if (action.type === dogActions.ADOPT_DOG_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			data: action.dog
		});
	}

	else if (action.type === dogActions.ADOPT_DOG_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error,
		});
	}

	else if (action.type === dogActions.ADOPT_DOG_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null,
			data: null
		});
	}

	return state;
};