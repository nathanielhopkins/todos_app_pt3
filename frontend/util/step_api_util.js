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

export const deleteStep = step => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/steps/${step.id}`
  })
}