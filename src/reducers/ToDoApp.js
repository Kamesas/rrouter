export default function ToDoAppTask(state = [], action) {
  switch (action.type) {
    case "ADD_TO_DO_APP_TASK":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return [...state];
  }
}
