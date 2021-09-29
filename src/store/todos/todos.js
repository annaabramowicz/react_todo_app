import { getRecipesFromApi } from "services/foodApi";

//initial state
const initialState = [];

//ACTION TYPES
const NAMESPACE = "TODOS_";
const ADD_TODO = `${NAMESPACE}ADD_TODO`;
const REMOVE_TODO = `${NAMESPACE}REMOVE_TODO`;
const REMOVE_ALL_TODO = `${NAMESPACE}REMOVE_ALL_TODO`;

const GET_RECIPES_STARTED = `${NAMESPACE}GET_RECIPES_STARTED`;
const GET_RECIPES_SUCCESS = `${NAMESPACE}GET_RECIPES_SUCCESS`;
const GET_RECIPES_FAIL = `${NAMESPACE}GET_RECIPES_FAIL`;

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case REMOVE_ALL_TODO:
      return initialState;
    default:
      return state;
  }
};

//ACTION CREATORS
export const addTodo = (newTodo) => ({ type: ADD_TODO, payload: newTodo });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });
export const removeAllTodos = () => ({ type: REMOVE_ALL_TODO });

const getRecipesStarted = () => ({ type: GET_RECIPES_STARTED });
const getRecipesSuccess = (payload) => ({type: GET_RECIPES_SUCCESS, payload});
const getRecipesFail = (error) => ({ type: GET_RECIPES_FAIL, error });

// THUNKS
export const getRecipesAsyc = () => async (dispatch, getState) => {
  dispatch(getRecipesStarted());
  try {
    const result = await getRecipesFromApi();
    console.log(result);
    dispatch(getRecipesSuccess({ payload: result }));
  } catch (err) {
    dispatch(getRecipesFail(err));
  }
};

// { todos: [] }

//SELECTORS
export const getTodos = (state) => state.todos;

export default reducer;
