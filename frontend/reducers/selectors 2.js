export const allTodos = (state) => {
  let todos = Object.values(state.todos);
  return todos;
};

export const stepsByTodoId = (state, todoId) => {
  let steps = [];
  let allSteps = Object.values(state.steps);
  allSteps.forEach((step) => {
    if(step.todoId == todoId) {
      steps.push(step);
    };
  });
  return steps;
};