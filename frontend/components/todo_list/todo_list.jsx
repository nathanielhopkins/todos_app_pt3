import React from "react";
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from "../todo_list/todo_form";



export default class TodoList extends React.Component {
  render() {
    const { todos, receiveTodo, removeTodo } = this.props;
    return(
      <div className='todo-list-container'>
        <TodoForm receiveTodo={receiveTodo} />
      <ul className='todo-list'>
        {todos.map(todo => 
          (<TodoListItem 
            key={todo.id} 
            todo={todo} 
            receiveTodo={receiveTodo}
            removeTodo={removeTodo}
            />
            
            ))}
      </ul>
      </div>
    )
  }
}