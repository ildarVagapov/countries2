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
		}
	}
})

export const { setSearch, setRegion } = controlseSlice.actions
export const controlseReducer = controlseSlice.reducer