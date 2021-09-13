import React from "react";
import TodoDetailViewContainer from './todo_detail_view_container';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = { detail: false };

    this.handleDone = this.handleDone.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }

  handleDone(e) {
    e.preventDefault();

    let toggled = Object.assign({}, this.props.todo);
    toggled.done = !toggled.done;
    this.props.updateTodo(toggled);
  }
  
  toggleView(e) {
    e.preventDefault();
    if(e.target.type == 'button') return;
    this.setState({detail: !this.state.detail });
  }

  render() {
    const { todo } = this.props;
    let detail;
    if(this.state.detail) {
      detail = <TodoDetailViewContainer todo={todo} />;
    }
    return(
      <li className='todo-list-item'>
        <div className='todo-list-header' onClick={this.toggleView}>
          <h3 className='list-item-title'>{todo.title}</h3>
          <input
            type='button'
            className='form-button'
            value={todo.done == false ? 'Done' : 'Undo'}
            onClick={this.handleDone}></input>
        </div>
        {detail}
      </li>
    )
  };
};