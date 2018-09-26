import { combineReducers } from "redux";
import task from "./taskRed";
import counter from "./counterRed";
import note from "./noteRed";
import ToDoAppTask from "./ToDoApp";

const rootReducer = combineReducers({
  task,
  counter,
  note,
  ToDoAppTask
});

export default rootReducer;
