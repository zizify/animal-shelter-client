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

export const fetchCat = () => {
	dispatch(fetchCatRequest());
	fetch('/api/cat').then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	}).then(cat => {
		dispatch(fetchCatSuccess(cat));
	});
};