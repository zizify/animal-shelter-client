import {REACT_API_API_BASE_URL} from '../config';

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
	type: FETCH_CAT_SUCCESS,
	loading: false,
	error: null,
	cat
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = error => ({
	type: FETCH_CAT_ERROR,
	loading: false,
	error
});

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = ({
	type: FETCH_CAT_REQUEST,
	loading: true,
	error: null
});

export const fetchCat = () => dispatch => {
	dispatch(fetchCatRequest());
	fetch(`${REACT_API_API_BASE_URL}/cat`).then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	}).then(cat => {
		dispatch(fetchCatSuccess(cat));
	}).catch(err => {
		dispatch(fetchCatError(err));
	});
};

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = cat => ({
	type: ADOPT_CAT_SUCCESS,
	loading: false,
	error: null,
	cat
});

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = error => ({
	type: ADOPT_CAT_ERROR,
	loading: false,
	error
});

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = ({
	type: ADOPT_CAT_REQUEST,
	loading: true,
	error: null
});

export const adoptCat = () => dispatch => {
	dispatch(adoptCatRequest());
	fetch(`${REACT_API_API_BASE_URL}/cat`, {method: 'DELETE'})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(() => dispatch(fetchCat()))
		.catch((err) => dispatch(adoptCatError(err)));
};