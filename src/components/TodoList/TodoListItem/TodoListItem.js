import React from 'react'

const TodoListItem = (props) => {

  const listStyle = {
    color: props.important ? 'red' : 'black'
  }

  return (
      <span>
        <span style={listStyle}>{props.label}</span>
      </span>
  )

};

export default TodoListItem