import React, {Component} from 'react'
import TodoList from '../TodoList/TodoList'
import Input from '../Input/Input'
import Heading from '../Heading/Heading'
import Filter from '../Filter/Filter'
import './App.scss'
import AddItem from '../AddItem/AddItem'


class App extends Component {

  state= {
    todoDate: [
      {label: 'drink'},
      {label: 'make'},
      {label: 'learn'},
      {label: 'yes'}
    ]
  };

  onDeleted = (id) => {
    this.setState((state) => {
      const before = this.state.todoDate.slice(0, id);
      const after = this.state.todoDate.slice(id+1);
      return{
        todoDate: [...before, ...after]
      }
    });
  };

  addItem = (text) => {
    this.setState((state) => {
      let newArr = this.state.todoDate.slice();
      newArr.push({label: text});
      return{
        todoDate: newArr
      }
    })
  }

  render(){
    return (
      <div>
        <Heading/>
        <Input/>
        <Filter/>
        <TodoList todos={this.state.todoDate} onDeleted={this.onDeleted} />
        <AddItem addItem={this.addItem} />
      </div>
    )
}

}

export default App;