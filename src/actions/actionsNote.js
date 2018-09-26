//export const decrement = value => ({ type: "DECREMENT", value });

export const addNote = note => ({ type: "ADD_NOTE", payload: note });

export const AddToDoAppTask = text => ({
  type: "ADD_TO_DO_APP_TASK",
  text,
  id: Date.now()
});

export const toggleToDo = id => ({
  type: "TOGGLE_TODO",
  id
});
