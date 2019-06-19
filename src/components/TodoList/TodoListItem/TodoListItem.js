import React, {Component} from 'react'
import './TodoListItem.scss'

class TodoListItem extends Component{

  // onLabelClick(){
  //   console.log(this.props.label)
  // };


  render(){

    const cls = ['TodoListItem'];
    if(this.props.done){
      cls.push('done');
    }
    if(this.props.priority){
      cls.push('priority');
    }

    return (
      <div className='itemWrap'>
        <span className={cls.join(' ')} onClick={this.props.onToggleDone}>{this.props.label}</span>
        <span className="btnWrap">
          <button className='btn btn-outline-success btn-sm' onClick={this.props.onTogglePriority}>
            <i className='fa fa-exclamation'/>
          </button>
          <button className='btn btn-outline-danger btn-sm' onClick={this.props.onDeleted}>
            <i className='fa fa-trash-o'/>
          </button>
        </span>
      </div>
    )
  }
}


export default TodoListItem