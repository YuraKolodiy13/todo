import React, {Component} from 'react'
import './AddItem.scss'

class AddItem extends Component{

  state ={
    label: ''
  }

  inputValue = e => {
    this.setState({
      label: e.target.value
    })
  }


  itemValue = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
  };

  render(){
    return(
        <form className="addItem d-flex" onSubmit={(e) => this.itemValue(e)}>
          <input type="text" className='form-control' onChange={(e) =>this.inputValue(e)}/>
          <button
              className='btn btn-outline-secondary'
              onClick={(e) => this.itemValue(e)}
          >
            Add item
          </button>
        </form>
    )
  }
};

export default AddItem;