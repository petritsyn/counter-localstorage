import {combineReducers, createStore, applyMiddleware} from 'redux'
import {counterReducer} from "./counter-reducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers( {
    counter: counterReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk))