// import { createStorecombineReducers, compose, applyMiddleware } from 'redux'
import * as api from '../config'
import thunk from 'redux-thunk'
import axios from 'axios'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { themeReducer } from './slices/themeSlice'

const reducer = combineReducers({
	theme: themeReducer
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

