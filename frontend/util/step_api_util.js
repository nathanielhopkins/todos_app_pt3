export const fetchSteps = (todoId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/todos/${todoId}/steps`
  })
};

export const createStep = (todoId, step) => {
  return $.ajax({
    method: 'POST',
    url: `/api/todos/${todoId}/steps`,
    data: { step }
  })
};