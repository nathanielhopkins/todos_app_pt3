import { connect } from "react-redux";
import TodoList from '../todo_list/todo_list';
import { allTodos } from "../../reducers/selectors";
import { updateTodo, createTodo, fetchTodos } from "../../actions/todo_actions";

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(fetchTodos()),
  createTodo: todo => dispatch(createTodo(todo)),
  updateTodo: todo => dispatch(updateTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(TodoList);