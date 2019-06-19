import React, {Component} from 'react'
import TodoList from '../TodoList/TodoList'
import Input from '../Input/Input'
import Heading from '../Heading/Heading'
import Filter from '../Filter/Filter'
import './App.scss'
import AddItem from '../AddItem/AddItem'


class App extends Component {

  state = {
    todoDate: [
        this.createTodoItem('drink'),
        this.createTodoItem('make'),
        this.createTodoItem('learn')
    ]
  };

  createTodoItem(label){
    return{
      label,
      important: false,
      done: false
    }
  }

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
    if(text === '') return;
    const newItem =this.createTodoItem(text);

    this.setState((state) => {
      const newArr = [...state.todoDate, newItem];
      return{
        todoDate: newArr
      }
    })
  };

  toggleProperty(arr, id, prop){
    const oldObj = arr[id];
    const newObj = {...oldObj, [prop]: !arr[id][prop]};
    return [...arr.slice(0, id), newObj, ...arr.slice(id+1)]
  }

  onTogglePriority = id => {
    this.setState(({todoDate}) => {
      return{
        todoDate: this.toggleProperty(todoDate, id, 'priority')
      }
    });
  };
  onToggleDone = id => {
    this.setState(({todoDate}) => {
      return{
        todoDate: this.toggleProperty(todoDate, id, 'done')
      }
    });
  };

  render(){
    return (
      <div>
        <Heading
            toDo={this.state.todoDate.filter(el => !el.done).length}
            done={this.state.todoDate.length - this.state.todoDate.filter(el => !el.done).length}
        />
        <Input/>
        <Filter/>
        <TodoList
            todos={this.state.todoDate}
            onDeleted={this.onDeleted}
            onTogglePriority={this.onTogglePriority}
            onToggleDone={this.onToggleDone}
        />
        <AddItem addItem={this.addItem} />
      </div>
    )
}

}

export default App;