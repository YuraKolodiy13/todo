import React from 'react'
import TodoListItem from './TodoListItem/TodoListItem'

const TodoList = (props) => {

  const elements = props.todos.map((item, index) => {
    return (
        <li key={index}>
          {/*<TodoListItem */}
            {/*label={item.label} */}
            {/*important={item.important}/>*/}

          <TodoListItem {...item} />
        </li>
    )
  });

  return (
      <ul>
        {elements}
      </ul>
  )
}

export default TodoList
