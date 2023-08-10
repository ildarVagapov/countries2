import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	search: '',
	region: ''
}

const controlseSlice = createSlice({
	name: 'controlse',
	initialState,
	reducers: {
		setSearch: (state, action) => {
			state.search = action.payload
		},
		setRegion: (state, action) => {
			state.region = action.payload
		},
		clearControle: (state, action) => {
			state.search = ''
			state.region = ''
		}
	}
})

export const { setSearch, setRegion, clearControle } = controlseSlice.actions
export const controlseReducer = controlseSlice.reducer