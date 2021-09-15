import React from 'react';

export default class StepListItem extends React.Component {
  constructor(props) {
    super(props)

    this.toggleDone = this.toggleDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  toggleDone(e) {
    e.preventDefault();
    let toggled = Object.assign({}, this.props.step, { done: !this.props.step.done });
    this.props.updateStep(toggled);
  }

  handleDelete(step) {
    this.props.deleteStep(step);
  }

  render() {
    const { title, body } = this.props.step;
    const { step } = this.props;

    return(
    <div className='step-list-item'>
      <div className='step-list-content'>
        <h4 className='step-list-item-title'>{title}</h4>
        <p className='step-list-item-body'>{body}</p>
      </div>
      <div className='step-list-buttons'>
        <button 
          className='step-list-item-toggle form-button'
          onClick={this.toggleDone}
          >{this.props.step.done ? "Undo" : "Done"}</button>
        <button 
          className='step-list-item-delete todo-delete'
          onClick={() => this.handleDelete(step)}
          >Delete Step</button>
      </div>
    </div>
    );
  }
}