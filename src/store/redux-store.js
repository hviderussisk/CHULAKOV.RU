import { combineReducers, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { wPosts } from './sagas'
import mainReducer from './mainReduser'


const reducers = combineReducers({ mainPage: mainReducer })

const sagaMiddleware = createSagaMiddleware()


const store = createStore( reducers , applyMiddleware(sagaMiddleware , logger) )
sagaMiddleware.run( wPosts )
export default store