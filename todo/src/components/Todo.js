import React from 'react';

const Todo = ({ task }) => {

  return (
    <div className="item-wrapper">
      <p>
        {task.text}
      </p>
    </div>
  )
}

export default Todo;
