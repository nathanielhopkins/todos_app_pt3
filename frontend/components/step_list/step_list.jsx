import React from 'react';
import StepForm from './step_form';
import StepsListItemContainer from './step_list_item_container';

export default class StepList extends React.Component { 
  render() {
    const { steps, todoId, createStep } = this.props;
    
    return(
      <div className='step-list-container'>
        <div className='steps'>
          {steps.map(step => <StepsListItemContainer key={step.id} step={step} />)}
        </div>
        <StepForm createStep={createStep} todoId={todoId} />
      </div>
    );
  };
};