import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
  id: Date.now(),
  text: 'Walk the dog.',
  completed: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        text: action.payload,
      };
    case TOGGLE_TODO:
      return {
        ...state,
        id: action.payload,
        completed: true,
      };
    default:
      return state;
  }
};
