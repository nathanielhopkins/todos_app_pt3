export const fetchTodos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/todos'
  })
);

export const createTodo = todo => (
  $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: todo
  })
);

export const updateTodo = todo => (
  $.ajax({
    method: 'PATCH',
    url: `/api/todo/${todo.id}`,
    data: { todo }
  })
);