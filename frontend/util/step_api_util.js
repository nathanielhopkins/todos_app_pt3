export const fetchSteps = (todoId) => {
  $.ajax({
    method: 'GET',
    url: `/api/todos/${todoId}/steps`
  })
};

export const createStep = (todoId, step) => {
  $.ajax({
    method: 'POST',
    url: `/api/todos/${todoId}/steps`,
    data: { step }
  })
};