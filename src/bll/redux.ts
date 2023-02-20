import {combineReducers, legacy_createStore as createStore, applyMiddleware} from 'redux'
import {ActionsTypes, counterReducer} from "./counter-reducer";
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, ActionsTypes>

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, ActionsTypes>