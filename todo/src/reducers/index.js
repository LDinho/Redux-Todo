import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
  tasks: [
    {
      id: 12,
      text: 'Walk Redux',
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
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
        return task;
      });

      return {
        ...state,
        tasks: updatedTasks,
      };
    default:
      return state;
  }
};
