import React, { useRef } from 'react';

const TodoForm = ({onFormSubmit}) => {

  const inputEl = useRef(null);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const newTask = inputEl.current.value;

      if (!newTask) {
        return;
      }
      onFormSubmit(newTask);
      inputEl.current.value = '';
    }}>
      <label className="label" htmlFor="">
        Add a task:
        <input
          className="input"
          name="todo"
          ref={inputEl}
          placeholder="What to do...?"
        />
      </label>

      <div className="button-wrapper">
        <button className="btn add-btn" type="submit">Add Task</button>
        <button className="btn clear-btn"
                onClick={() => {}}
        >
          Clear Completed
        </button>
      </div>
    </form>
  );

}

export default TodoForm;

