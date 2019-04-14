import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

class TodoList extends React.Component {

  render() {
    return (
      <div className="main-container">
        {this.props.tasks.map((task) => {
          console.log('FROM TodoList:', task.text);
          const {id} = task;

          return <Todo key={id}
                       task={task}

          />
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(
  mapStateToProps,
  {

  }
)(TodoList);
