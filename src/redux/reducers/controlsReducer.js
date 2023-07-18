const SET_SEARCH = 'SET_SEARCH'

const initialState = {
	search: '',
	region: ''
}

export const controlsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SEARCH: {
			return {
				...state,
				search: action.payload
			}
		}
		default: {
			return state
		}
	}
}

export const setSearchAC = (search) => ({ type: SET_SEARCH, payload: search })