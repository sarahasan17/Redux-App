import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Importing `thunk` as a named export
import reducers from "./reducers/amountReducer";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
