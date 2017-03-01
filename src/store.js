// src/store.js
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'

import * as reducers from './reducers'

const reducer = combineReducers(Object.assign({}, reducers))

const enhancer = compose(
  applyMiddleware(ReduxThunk)
)

const store = createStore(reducer, enhancer)

export default store
