import {REACT_APP_API_BASE_URL} from '../config';

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
	type: FETCH_DOG_SUCCESS,
	loading: false,
	error: null,
	dog
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = error => ({
	type: FETCH_DOG_ERROR,
	loading: false,
	error
});

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
	type: FETCH_DOG_REQUEST,
	loading: true,
	error: null
});

export const fetchDog = () => dispatch => {
	dispatch(fetchDogRequest());
	fetch(`${REACT_APP_API_BASE_URL}/dog`).then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	}).then(dog => {
		dispatch(fetchDogSuccess(dog));
	}).catch(err => {
		dispatch(fetchDogError(err));
	});
};

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = dog => ({
	type: ADOPT_DOG_SUCCESS,
	loading: false,
	error: null,
	dog
});

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError = error => ({
	type: ADOPT_DOG_ERROR,
	loading: false,
	error
});

export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
export const adoptDogRequest = ({
	type: ADOPT_DOG_REQUEST,
	loading: true,
	error: null
});

export const adoptDog = () => dispatch => {
	dispatch(adoptDogRequest());
	fetch(`${REACT_APP_API_BASE_URL}/dog`, {method: 'DELETE'})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(() => dispatch(fetchDog()))
		.catch((err) => dispatch(adoptDogError(err)));
};