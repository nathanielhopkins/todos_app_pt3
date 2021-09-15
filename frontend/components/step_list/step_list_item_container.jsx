import { connect } from "react-redux";
import { receiveStep, removeStep, updateStep } from "../../actions/step_actions";
import StepListItem from "./step_list_item";

const mapDispatchToProps = dispatch => ({
  updateStep: step => dispatch(updateStep(step)),
  receiveStep: step => dispatch(receiveStep(step)),
  removeStep: step => dispatch(removeStep(step))
});

export default connect(null, mapDispatchToProps)(StepListItem);