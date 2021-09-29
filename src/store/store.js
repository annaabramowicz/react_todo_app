import { createStore, applyMiddleware } from "redux";
import todosReducer from "./todos/todos";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

//główny reducer dla wszystkich części
const reducer = combineReducers({
  // slice, czyli wycinki głownego
  todos: todosReducer,
});

const store = createStore(reducer, composedEnhancer);

export default store;
