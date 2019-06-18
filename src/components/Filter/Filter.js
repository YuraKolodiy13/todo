import React, {Component} from 'react'

class Filter extends Component{
  state = {
    active: true
  };

  onBtnClick = () => {
    this.setState({
      active: !this.state.active
    })
  };

  render(){

    const classAct = this.state.active ? 'active' : '';

    return (
        <div className='btn-group'>
          <button onClick={this.onBtnClick} className={`btn btn-info ${classAct}`}>All</button>
          <button className='btn btn-outline-secondary'>Active</button>
          <button className='btn btn-outline-secondary'>Done</button>
        </div>
    )
  }
}

export default Filter;