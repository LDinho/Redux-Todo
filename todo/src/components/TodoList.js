import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {

  render() {
    const { tasks, onTaskClickHandler } = this.props;

    return (
      <div className="main-container">
        {tasks.map((task) => {
          console.log('FROM TodoList:', task.text);
          const {id} = task;

          return <Todo key={id}
                       task={task}
                       onTaskClickHandler={onTaskClickHandler}

          />
        })}
      </div>
    );
  }
}

export default TodoList;
