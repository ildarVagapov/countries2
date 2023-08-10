import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { themeReducer } from './slices/themeSlice'
import { controlseReducer } from './slices/controlseSlice'
import * as api from '../config'
import thunk from 'redux-thunk'
import axios from 'axios'
// import { createStorecombineReducers, compose, applyMiddleware } from 'redux'

const reducer = combineReducers({
	theme: themeReducer,
	controlse: controlseReducer,
})

export const store = configureStore({ reducer, devTools: true })

// const reducers = combineReducers({
// 	theme: themeReducer,
// 	countries: countriesReducer,
// 	controls: controlsReducer,
// 	details: detailsReducer
// })

// const composeEnhancers = compose

// export const store = createStore(reducers, composeEnhancers(
// 	applyMiddleware(thunk.withExtraArgument({
// 		client: axios,
// 		api: api
// 	}))))

