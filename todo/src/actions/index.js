export const ADD_TODO = 'add_todo';
export const TOGGLE_TODO = 'toggle_todo';

export const add_todo = (newTask) => {
  return {
    type: ADD_TODO,
    payload: newTask,
  }
};

export const toggle_todo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  }
};
