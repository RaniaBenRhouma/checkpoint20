import {combineReducers, createStore} from "redux"
import ListReducer  from "./reducers/ListReducer"
const Store =createStore(combineReducers({
value:ListReducer
}))
export default Store