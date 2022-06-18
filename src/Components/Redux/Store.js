import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose
} from "redux"

import thunk from "redux-thunk"
import {ProductReducer} from "./Reducer.js";

const rootReducer = combineReducers({gearbest:ProductReducer});

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)