import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCountriesByName = createAsyncThunk('details/Fetch', (name, { extra: { client, api } }) => {
	return client.get(api.searchByCountry(name))
})

const initialState = {
	status: 'idle',
	error: null,
	currentCountry: null
}

const detailsSlice = createSlice({
	name: 'details',
	initialState,
	reducers: {
		clearDetails: (_, action) => action.payload
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadCountriesByName.pending, (state, action) => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(loadCountriesByName.fulfilled, (state, action) => {
				state.status = 'idle'
				state.currentCountry = action.payload.data[0]
			})
			.addCase(loadCountriesByName.rejected, (state, action) => {
				state.status = 'rejected'
				state.error = action.payload || action.error.message
			})
	}
})

export const { clearDetails } = detailsSlice.actions
export const detailsReducer = detailsSlice.reducer