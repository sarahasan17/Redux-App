import { combineReducers } from "redux";
import reducer from "./amountReducer"; // assuming the amount reducer

const reducers = combineReducers({
  amount: reducer, // map 'amount' to your amountReducer
});

export default reducers;
