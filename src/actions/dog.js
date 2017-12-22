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
export const fetchDogRequest = ({
	type: FETCH_DOG_REQUEST,
	loading: true,
	error: null
});

export const fetchDog = () => {
	dispatch(fetchDogRequest());
	fetch('/api/dog').then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	}).then(dog => {
		dispatch(fetchDogSuccess(dog));
	});
};