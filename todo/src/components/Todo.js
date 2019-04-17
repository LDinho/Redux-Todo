import React from 'react';

const Todo = ({task, onTaskClickHandler}) => {

  const text_decoration =  task.completed ? 'line-through': 'none';

  return (
    <div className="item-wrapper"
         onClick={() => onTaskClickHandler(task.id)}
         style={{ textDecoration: text_decoration }}
    >
      <p>
        {task.text}
      </p>
    </div>
  )
}

export default Todo;
