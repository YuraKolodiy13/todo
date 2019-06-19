import React from 'react'
import TodoListItem from './TodoListItem/TodoListItem'
import './TodoList.scss'

const TodoList = (props) => {

  const elements = props.todos.map((item, index) => {
    return (
        <li key={index} className='list-group-item'>
          {/*<TodoListItem */}
            {/*label={item.label} */}
            {/*important={item.important}/>*/}

          <TodoListItem
              {...item}
              onDeleted={() => props.onDeleted(index)}
              onTogglePriority={() => props.onTogglePriority(index)}
              onToggleDone={() => props.onToggleDone(index)}
          />
        </li>
    )
  });

  return (
      <ul className='list-group TodoList'>
        {elements}
      </ul>
  )
}

export default TodoList
