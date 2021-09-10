import { combineReducers } from "redux";
import todosReducer from "./todos_reducer";
import stepReducer from "./step_reducer";
import errorReducer from "./error_reducer";

export const rootReducer = combineReducers({
  todos: todosReducer, 
  steps: stepReducer,
  errors: errorReducer
});