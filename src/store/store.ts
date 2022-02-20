import {combineReducers,createStore} from 'redux'
import cartReducer from "./reducers/cartReducer";
import {composeWithDevTools} from "redux-devtools-extension";
const reducers=combineReducers({
    cart:cartReducer
})
const store=createStore(reducers,composeWithDevTools())
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
export default store
