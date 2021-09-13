import React from 'react';
import { stepsByTodoId } from '../../reducers/selectors';

export default class StepListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = { done: false}

    this.toggleDone = this.toggleDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  toggleDone(e) {
    e.preventDefault();
    this.setState({done: !this.state.done})
  }

  handleDelete(step) {
    this.props.removeStep(step.id);
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
          >{this.state.done ? "Undo" : "Done"}</button>
        <button 
          className='step-list-item-delete todo-delete'
          onClick={() => this.handleDelete(step)}
          >Delete Step</button>
      </div>
    </div>
    );
  }
}