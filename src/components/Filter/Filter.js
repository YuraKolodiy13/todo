import React, {Component} from 'react'
import './Filter.scss'

class Filter extends Component{
  state = {
    filter: [
      {label: 'All', className: 'btn btn-outline-secondary', active: true},
      {label: 'Active', className: 'btn btn-outline-secondary', active: false},
      {label: 'Done', className: 'btn btn-outline-secondary', active: false}
    ]
  };


  prevState = [...this.state.filter];
  toggleState = (index) => {
    this.prevState.map(item => {
      if(item.active) item.active = false;
      return item.active
    });
    this.prevState[index].active = true;
    this.setState({
      filter: this.prevState
    })
  };

  render(){

    return (
        <div className='btn-group Filter'>
          {this.prevState.map((item, index) => {
            console.log(item.className.indexOf('active'));
            if(item.active && item.className.indexOf('active') === -1) item.className += ' active';
            else if(!item.active) item.className = item.className.replace(' active', '');
            return(
                <button key={index} className={item.className} onClick={() => this.toggleState(index)}>{item.label}</button>
            )
          })}
        </div>
    )
  }
}

export default Filter;