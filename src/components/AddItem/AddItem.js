import React, {Component} from 'react'
import './AddItem.scss'

class AddItem extends Component{

  state ={
    label: ''
  };

  inputValue = e => {
    this.setState({
      label: e.target.value
    })
  };


  itemValue = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: ''
    })
  };

  render(){
    return(
        <form className="addItem d-flex" onSubmit={this.itemValue}>
          <input type="text" placeholder='type something' className='form-control' onChange={this.inputValue} value={this.state.label}/>
          <button className='btn btn-outline-secondary'>Add item</button>
        </form>
    )
  }
};

export default AddItem;