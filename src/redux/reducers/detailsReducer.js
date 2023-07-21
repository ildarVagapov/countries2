const SET_COUNTRY_DETAILS = 'SET_COUNTRY_DETAILS'
const SET_LOADING_DETAILS = 'SET_LOADING_DETAILS'
const SET_ERROR_DETAILS = 'SET_ERROR_DEATAILS'
const CLEAR_DETAILS = 'CLEAR_DETAILS'

const initialState = {
	status: 'idle',
	error: null,
	currentCountry: null
}

export const detailsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_COUNTRY_DETAILS: {
			return {
				...state,
				status: 'received',
				currentCountry: payload
			}
		}
		case SET_LOADING_DETAILS: {
			return {
				...state,
				status: 'loading',
			}
		}
		case SET_ERROR_DETAILS: {
			return {
				...state,
				status: 'rejected',
				error: payload
			}
		}
		case CLEAR_DETAILS: {
			return initialState
		}
		default: {
			return state
		}
	}
}

export const clearDetails = () => ({ type: CLEAR_DETAILS })
const setLoadingDetails = () => ({ type: SET_LOADING_DETAILS })
const setErrorDetails = (err) => ({ type: SET_ERROR_DETAILS, payload: err })
const setCountryDetails = (country) => ({ type: SET_COUNTRY_DETAILS, payload: country })

export const loadCountriesByName = (name) => (dispatch, _, { client, api }) => {
	dispatch(setLoadingDetails())
	client.get(api.searchByCountry(name))
		.then(({ data }) => dispatch(setCountryDetails(data[0])))
		.catch(err => dispatch(setErrorDetails(err)))
	// .then(({ data }) => console.log(data))
	// не забудь по эксперементировать с ({data}) - (data)
}