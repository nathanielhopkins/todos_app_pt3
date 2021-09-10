import React from 'react';
import ToDoListContainer from './todo_list/todo_list_container'

export default class App extends React.Component {
  render() {
    return (
      <div className='todo-app'>
        <h1 className='main-header'>Todos App</h1>
        <ToDoListContainer />
      </div>
    );
  }
}