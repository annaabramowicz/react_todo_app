//initial state
const initialState = [];

//ACTION TYPES
const NAMESPACE = "TODOS_";
const ADD_TODO = `${NAMESPACE}ADD_TODO`;
const REMOVE_TODO = `${NAMESPACE}REMOVE_TODO`;

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

//ACTION CREATORS
export const addTodo = (newTodo) => ({ type: ADD_TODO, payload: newTodo });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });

// { todos: [] }

//SELECTORS
export const getTodos = (state) => state.todos;

export default reducer;
