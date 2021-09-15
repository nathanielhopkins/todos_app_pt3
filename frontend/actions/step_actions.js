export const RECEIVE_STEPS = "RECIEVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";
import * as StepApiUtil from '../util/step_api_util'

import { clearErrors, receiveErrors } from './error_actions';

export const receiveStep = (step) => {
  return {
    type: RECEIVE_STEP,
    step,
  }
}

export const receiveSteps = (steps) => {
  return {
    type: RECEIVE_STEPS,
    steps,
  }
}

export const removeStep = (stepId) => {
  return {
    type: REMOVE_STEP,
    stepId
  }
}

export const fetchSteps = (todoId) => dispatch => (
  StepApiUtil.fetchSteps(todoId)
    .then(steps => dispatch(receiveSteps(steps)))
);

export const createStep = (todoId, step) => dispatch => (
  StepApiUtil.createStep(todoId, step)
    .then(
      step => {dispatch(receiveStep(step)); dispatch(clearErrors());},
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const updateStep = step => dispatch => (
  StepApiUtil.updateStep(step)
    .then(step => dispatch(receiveStep(step)))
);

export const deleteStep = step => dispatch => (
  StepApiUtil.deleteStep(step)
    .then(step => dispatch(removeStep(step.id)))
);