import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { toggle_todo } from './actions';
import TodoList from './components/TodoList'

class App extends Component {

  handleClickToggle = (id) => {
    this.props.toggle_todo(id);
  }

  render() {
    const {tasks} = this.props;

    return (
      <div className="App">
        <header className="App-header">
            <h1 className="header-title">
              - TodoOrNotTodo -
            </h1>
        </header>

        <TodoList tasks={tasks}
                  onTaskClickHandler={this.handleClickToggle}
        />
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
  { toggle_todo,

  }
)(App);
