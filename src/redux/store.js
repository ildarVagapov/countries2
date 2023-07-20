import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import * as api from '../config'
import thunk from 'redux-thunk'
import axios from 'axios'
import { themeReducer } from './reducers/themeReducer'
import { countriesReducer } from './reducers/countriesReducer'
import { controlsReducer } from './reducers/controlsReducer'
import { detailsReducer } from './reducers/detailsReducer'

const reducers = combineReducers({
	theme: themeReducer,
	countries: countriesReducer,
	controls: controlsReducer,
	details: detailsReducer
})

const composeEnhancers = compose

export const store = createStore(reducers, composeEnhancers(
	applyMiddleware(thunk.withExtraArgument({
		client: axios,
		api: api
	}))))