import React from 'react'
import './Heading.scss'

const Heading = (props) => {
  return (
      <div className='Heading d-flex'>
        <h1>My ToDo List</h1>
        <h2>{`${props.toDo} more to do, ${props.done} done`}</h2>
      </div>
  )
};

export default Heading;