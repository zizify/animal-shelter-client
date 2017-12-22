import catActions from '../actions/index';

const initialState = {
	loading: false,
	error: null,
	data: null
};

export const catReducer = (state=initialState, action) => {
	if (action.type === catActions.FETCH_CAT_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			data: action.cat
		});
	}

	else if (action.type === catActions.FETCH_CAT_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error,
		});
	}

	else if (action.type === catActions.FETCH_CAT_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null,
			data: null
		});
	}

	else if (action.type === catActions.ADOPT_CAT_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			data: action.cat
		});
	}

	else if (action.type === catActions.ADOPT_CAT_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error,
		});
	}

	else if (action.type === catActions.ADOPT_CAT_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null,
			data: null
		});
	}

	return state;
};