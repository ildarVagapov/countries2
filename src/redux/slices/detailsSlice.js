import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCountriesByName = createAsyncThunk('details/Fetch', (name, { extra: { client, api } }) => {
	return client.get(api.searchByCountry(name))
})

export const loadingNeighborsByBorder = createAsyncThunk('details/FetchBorder', (code, { extra: { client, api } }) => {
	// debugger
	return client.get(api.filterByCode(code))
})

const initialState = {
	status: 'idle',
	error: null,
	currentCountry: null,
	neighbors: []
}

const detailsSlice = createSlice({
	name: 'details',
	initialState,
	reducers: {
		clearDetails: (_, action) => initialState
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
			.addCase(loadingNeighborsByBorder.fulfilled, (state, action) => {
				state.status = 'idle'
				state.neighbors = action.payload.data // Обновляем состояние соседей
			})
	}
})

export const { clearDetails } = detailsSlice.actions
export const detailsReducer = detailsSlice.reducer