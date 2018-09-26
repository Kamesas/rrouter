export default function ToDoAppTask(state = [], action) {
  switch (action.type) {
    case "ADD_TO_DO_APP_TASK":
      return [...state, { id: action.id, text: action.text, completed: false }];
    case "TOGGLE_TODO": {
      return state.map(
        task =>
          task.id === action.id ? { ...task, completed: !task.completed } : task
      );
    }
    default:
      return [...state];
  }
}
