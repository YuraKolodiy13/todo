import React from 'react'
import './AddItem.scss'

const AddItem = (props) =>{
  return(
    <div className="addItem" >
      <input type="text"/>
      <button className='btn btn-outline-secondary' onClick={(e) => props.addItem(e.target.previousElementSibling.value)}>Add item</button>
    </div>
  )
};

export default AddItem;