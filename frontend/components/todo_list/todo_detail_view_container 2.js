import { connect } from "react-redux";
import { receiveSteps } from "../../actions/step_actions";
import TodoDetailView from './todo_detail_view';
import { deleteTodo } from "../../actions/todo_actions";

const mapDispatchToProps = dispatch => ({
  receiveSteps: todoId => dispatch(receiveSteps(todoId)),
  deleteTodo: todo => dispatch(deleteTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoDetailView)