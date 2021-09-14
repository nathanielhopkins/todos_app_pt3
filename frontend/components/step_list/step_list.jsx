import React from 'react';
import StepForm from './step_form';
import StepsListItemContainer from './step_list_item_container';

export default class StepList extends React.Component { 
  render() {
    const { steps, todoId, createStep, errors } = this.props;
    
    return(
      <div className='step-list-container'>
        <div className='steps'>
          {steps.map(step => <StepsListItemContainer key={step.id} step={step} />)}
        </div>
        <StepForm errors={errors} createStep={createStep} todoId={todoId} />
      </div>
    );
  };
};