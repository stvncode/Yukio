
import { createBrowserHistory } from 'history'
import env from '@beam-australia/react-env'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import { YukioActions } from './yukio.actions'
import { yukioReducer } from './yukio.reducer'
import { YukioState } from './yukio.state'

export type Actions = YukioActions

export interface State {
    yukio: YukioState
}

export const epicMiddleware = createEpicMiddleware<Actions, Actions, State>()

const middlewares = env('ENV') === 'production' ? [epicMiddleware] : [epicMiddleware, logger]

export const history = createBrowserHistory()

export const store = createStore<State, Actions, unknown, unknown>(
    combineReducers<State>({
        yukio: yukioReducer
    }),
    composeWithDevTools(applyMiddleware(...middlewares))
)