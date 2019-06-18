import React from 'react'

function Todo(props) {
  console.log('props in todo', props)
  return <li>{props.todo}</li>
}

export default Todo
