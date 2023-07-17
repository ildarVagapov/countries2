import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { themeReducer } from './reducers/themeReducer'
import * as api from '../config'
import axios from 'axios'
import thunk from 'redux-thunk'

const reducers = combineReducers({
	theme: themeReducer,
})

const composeEnhancers = compose

export const store = createStore(reducers, composeEnhancers(
	applyMiddleware(thunk.withExtraArgument({
		client: axios,
		api: api
	}))))