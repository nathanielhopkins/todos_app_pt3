import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';

const initialState = {};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      let newTodos = {};
      action.todos.map(todo => newTodos[todo.id] = todo);
      return newTodos;
    case RECEIVE_TODO:
      let todos = Object.assign({}, state);
      todos[action.todo.id] = action.todo;
      return todos;
    case REMOVE_TODO:
      let prunedTodos = Object.assign({}, state);
      delete prunedTodos[action.todo.id];
      return prunedTodos;
    default:
      return state;
  }
};

export default todosReducer;