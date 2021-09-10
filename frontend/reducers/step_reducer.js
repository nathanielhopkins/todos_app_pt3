import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from "../actions/step_actions";

const initialState = {};

const stepReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_STEPS:
      let newSteps = {};
      action.steps.map(step => newSteps[step.id] = step);
      return newSteps;
    case RECEIVE_STEP:
      let steps = Object.assign({}, state);
      steps[action.step.id] = action.step;
      return steps;
    case REMOVE_STEP:
      let prunedSteps = Object.assign({}, state);
      delete prunedSteps[action.stepId];
      return prunedSteps;
    default:
      return state;
  }
}

export default stepReducer;