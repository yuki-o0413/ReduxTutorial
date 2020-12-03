import { createStore as reduxCreateStore, combineReducers } from "redux";
import { test } from "./reducers";

export default function createStore() {
    const store = reduxCreateStore(
        combineReducers({
            test
        })
    );
    return store;
}
