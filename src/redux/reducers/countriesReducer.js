const SET_COUNTRIES = 'SET_COUNRIES'
const SET_LOADING = 'SET_LOADING'
const SET_ERROR = 'SET_ERROR'

let initialState = {
	status: 'idle',
	error: null,
	list: []
}

export const countriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_COUNTRIES: {
			return {
				...state,
				status: 'received',
				list: action.payload
			}
		}
		case SET_LOADING: {
			return {
				...state,
				status: 'loading',
				error: null
			}
		}
		case SET_ERROR: {
			return {
				...state,
				status: 'rejected',
				error: action.payload
			}
		}
		default: {
			return state
		}
	}
}

export const loadCountries = () => (dispatch, _, { client, api }) => {
	dispatch(setLoading())

	client.get(api.ALL_COUNTRIES)
		.then((data) => dispatch(setCountries(data)))
		.then((err) => dispatch(setError(err.message)))
}

export const setCountries = () => ({ type: SET_COUNTRIES })
export const setLoading = () => ({ type: SET_LOADING })
export const setError = () => ({ type: SET_ERROR })