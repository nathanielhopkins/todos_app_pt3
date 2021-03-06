import React from "react";
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from "../todo_list/todo_form";
import { updateTodo } from "../../util/todo_api_util";



export default class TodoList extends React.Component {
  componentDidMount(){
    this.props.requestTodos();
  }

  render() {
    const { todos, updateTodo, createTodo, errors } = this.props;
    return(
      <div className='todo-list-container'>
        <TodoForm errors={errors} createTodo={createTodo} />
      <ul className='todo-list'>
        {todos.map(todo => 
          (<TodoListItem 
            key={todo.id} 
            todo={todo} 
            updateTodo={updateTodo}
            />
            
            ))}
      </ul>
      </div>
    )
  }
}