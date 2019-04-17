import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { toggle_todo, add_todo } from './actions';
import TodoList from './components/TodoList';
import TodoForm from './components/ToDoForm';

class App extends Component {

  handleClickToggle = (id) => {
    this.props.toggle_todo(id);
  }

  handleSubmit = (newTask) => {
    this.props.add_todo(newTask);
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

        <TodoForm onFormSubmit={this.handleSubmit} />

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
    add_todo,
  }
)(App);
