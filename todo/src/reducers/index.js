import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
  tasks: [
    {
      id: 12,
      text: 'Walk the dog.',
      completed: false,
    },
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTodo]
      };
    case TOGGLE_TODO:
      console.log('From Reducer Toggle');
      const selectedTask = state.tasks.find(task => task.id === action.payload);
      const updatedTask = {
        ...selectedTask,
        completed: !selectedTask.completed,
      };
      return {
        ...state,
        tasks: [...state.tasks, updatedTask],
      };
    default:
      return state;
  }
};
