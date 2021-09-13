import { connect } from "react-redux";
import { fetchSteps } from "../../actions/step_actions";
import TodoDetailView from './todo_detail_view';
import { deleteTodo } from "../../actions/todo_actions";

const mapDispatchToProps = (dispatch, { todo }) => ({
  fetchSteps: () => dispatch(fetchSteps(todo.id)),
  deleteTodo: todo => dispatch(deleteTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoDetailView)