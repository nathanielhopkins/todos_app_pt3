export const fetchSteps = (todoId) => {
  $.ajax({
    method: 'GET',
    url: `/api/todos/${todoId}/steps`
  })
};