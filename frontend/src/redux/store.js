import {legacy_createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./auth/auth.reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
