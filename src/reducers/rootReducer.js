import { combineReducers } from "redux";
import task from "./taskRed";
import counter from "./counterRed";
import note from "./noteRed";

const rootReducer = combineReducers({
  task,
  counter,
  note
});

export default rootReducer;
