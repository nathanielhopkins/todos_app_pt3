import React from 'react';
import StepListContainer from '../step_list/step_list_container';

export default class TodoDetailView extends React.Component {
  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTodo(this.props.todo);
  }

  render() {
    const { todo } = this.props;
    return(
      <div className='todo-detail-view'>
        <div className='todo-detail-main'>
          <p className='detail-body'>{todo.body}</p>
          <div className='tag-buttons'>
            {/* {todo.tags.map((tag, idx) => 
              <input
                type='button'
                className='tag-button'
                value={tag}
                key={idx}
              ></input>
            )} */}
          </div>
        </div>
        <StepListContainer todoId={todo.id} />
        <button
          className='todo-delete'
          onClick={(e) => this.handleDelete(e)}>Delete Todo</button>
      </div>
    );
  };
};