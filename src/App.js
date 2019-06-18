import React, { Component } from 'react'
import TodoList from './components/TodoList'
import './App.css'

class App extends Component {
  state = {
    todos: ['do dishes', 'do laundry', "doesn't matter", 'something else']
  }

  render() {
    console.log('this: ', this)
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos} five={5} />
      </div>
    )
  }
}

export default App
