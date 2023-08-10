import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCountries = createAsyncThunk('controls/Fetching', async (_, { extra: { client, api } }) => {
	return client.get(api.ALL_COUNTRIES)
})

const initialState = {
	status: 'idle',
	error: null,
	list: []
}

const countriesSlice = createSlice({
	name: 'countries',
	initialState,
	reducers: {
		// setList: (state, actions) => {
		// 	state.list = actions.payload
		// },
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadCountries.pending, (state, action) => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(loadCountries.rejected, (state, action) => {
				state.status = 'rejected'
				state.error = action.payload
			})
			.addCase(loadCountries.fulfilled, (state, action) => {
				state.status = 'received'
				state.list = action.payload.data
			})
	}
})

export const { setList } = countriesSlice.actions
export const countriesReducer = countriesSlice.reducer