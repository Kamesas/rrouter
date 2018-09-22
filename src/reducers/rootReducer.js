import { combineReducers } from "redux";
import task from "./taskRed";
import counter from "./counterRed";

const rootReducer = combineReducers({
  task,
  counter
});

export default rootReducer;
