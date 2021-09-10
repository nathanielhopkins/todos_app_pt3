import React from 'react';
import StepForm from './step_form';
import StepsListItemContainer from './step_list_item_container';

export default class StepList extends React.Component { 
  render() {
    const { steps, todoId, receiveStep } = this.props;
    
    return(
      <div className='step-list-container'>
        <div className='steps'>
          {steps.map(step => <StepsListItemContainer key={step.id} step={step} />)}
        </div>
        <StepForm receiveStep={receiveStep} todoId={todoId} />
      </div>
    );
  };
};