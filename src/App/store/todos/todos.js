// INITIAL STATE
const initialState = [];

// ACTION
const NAMESPACE = "TODOS_";
const ADD_TODO = `${NAMESPACE}ADD_TODO`;
const REMOVE_TODO = `${NAMESPACE}REMOVE_TODO`;
const REMOVE_ALL_TODOS = `${NAMESPACE}REMOVE_ALL_TODO`;

// REDUCER
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case REMOVE_ALL_TODOS:
      return (state = initialState);
    default:
      return state;
  }
};

// ACTION CREATORS
export const addTodo = (newTodo) => ({ type: ADD_TODO, payload: newTodo });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });
export const removeAllTodos = () => ({ type: REMOVE_ALL_TODOS});

// SELECTORS
export const getTodos = (state) => state.todos;

export default todosReducer;
