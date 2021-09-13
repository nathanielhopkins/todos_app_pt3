import { connect } from "react-redux";
import StepList from "./step_list";
import { stepsByTodoId } from '../../reducers/selectors';
import { createStep } from '../../actions/step_actions';

const mapStateToProps = (state, { todoId }) => ({
  steps: stepsByTodoId(state, todoId),
  todoId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createStep: (...args) => dispatch(createStep(...args))
});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);