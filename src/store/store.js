import { createStore, applyMiddleware } from "redux";
import recipesReducer from "./recipes/recipes";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

//główny reducer dla wszystkich części
const reducer = combineReducers({
  // slice, czyli wycinki głownego
  recipes: recipesReducer,
});

const store = createStore(reducer, composedEnhancer);

export default store;
