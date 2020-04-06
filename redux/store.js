import { createStore, combineReducers, applyMiddleware } from "redux";
import { galaryReducer } from "./galary-reducer";
import thunk from 'redux-thunk'

const reducers = combineReducers({
    galaryReducer
});
export const store = createStore(reducers, applyMiddleware(thunk));
