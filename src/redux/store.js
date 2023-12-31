import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { themeReducer } from './slices/themeSlice'
import { controlseReducer } from './slices/controlseSlice'
import * as api from '../config'
import thunk from 'redux-thunk'
import axios from 'axios'
import { countriesReducer } from './slices/countriesSlice'
import { detailsReducer } from './slices/detailsSlice'

const reducer = combineReducers({
	theme: themeReducer,
	controlse: controlseReducer,
	countries: countriesReducer,
	details: detailsReducer
})

export const store = configureStore({
	reducer,
	devTools: true,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		thunk: {
			extraArgument: {
				client: axios,
				api: api
			},
		},
		serializableCheck: false,
	}),
})


