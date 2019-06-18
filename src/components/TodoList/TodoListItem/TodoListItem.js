import React, {Component} from 'react'
import './TodoListItem.scss'

class TodoListItem extends Component{

  // onLabelClick(){
  //   console.log(this.props.label)
  // };

  state = {
    done: false,
    priority: false
  };

  onLabelClick = () => {
    this.setState(state => {
      return{
        done: !this.state.done
      }
    })
  };

  onPriorityClick = () => {
    this.setState( state => {
      return{
        priority: !this.state.priority
      }
    })
  };



  render(){

    const cls = ['TodoListItem'];
    if(this.state.done){
      cls.push('done');
    }
    if(this.state.priority){
      cls.push('priority');
    }

    return (
      <span>
        <span className={cls.join(' ')} onClick={this.onLabelClick}>{this.props.label}</span>
        <button className='btn btn-outline-success btn-sm' onClick={this.onPriorityClick}>
          <i className='fa fa-exclamation'/>
        </button>
        <button className='btn btn-outline-danger btn-sm' onClick={this.props.onDeleted}>
          <i className='fa fa-trash-o'/>
        </button>
      </span>
    )
  }
}


export default TodoListItem