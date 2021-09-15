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

export const updateStep = step => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/steps/${step.id}`,
    data: { step }
  })
}