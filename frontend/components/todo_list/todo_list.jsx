import React from "react";
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from "../todo_list/todo_form";



export default class TodoList extends React.Component {
  componentDidMount(){
    this.props.requestTodos();
  }

  render() {
    const { todos, receiveTodo, removeTodo, createTodo, errors } = this.props;
    return(
      <div className='todo-list-container'>
        <TodoForm errors={errors} createTodo={createTodo} receiveTodo={receiveTodo} />
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