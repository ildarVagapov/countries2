const SET_THEME = 'SET_THEME'

export const themeReducer = (state = 'dark', action) => {
	switch (action.type) {
		case SET_THEME: {
			return action.payload
		}
		default: {
			return state
		}
	}
}

export const setThemeAC = (theme) => ({ type: SET_THEME, payload: theme })