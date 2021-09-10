import { createStore } from "redux";
import { rootReducer } from "../reducers/root_reducer";
import { applyMiddleware } from "redux";
import thunkMiddleware from "../middleware/thunk";


const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

export default configureStore;