import AnecdoteReducer from '../reducers/AnecdoteReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'
import NotificationReducer from '../reducers/NotificationReducer'
import FilterReducer from '../reducers/FilterReducer'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

const reducer = combineReducers({
    anecdotes: AnecdoteReducer,
    notification: NotificationReducer,
    filter: FilterReducer
})


const Store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default Store