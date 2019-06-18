import React from 'react'
import Todo from './Todo'

function TodoList(props) {
  console.log('props in todo list: ', props)
  let listOfTodos = props.todos.map(todo => <Todo key={todo} todo={todo} />)
  return <ul>{listOfTodos}</ul>
}
export default TodoList
