import { createStore, combineReducers } from "redux";
import { credential, app } from "../reducers/index";

export default createStore(
    combineReducers({
        credential: credential,
        app: app
    })
);
