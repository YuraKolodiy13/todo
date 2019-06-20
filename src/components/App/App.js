import React, {Component} from 'react'
import TodoList from '../TodoList/TodoList'
import Search from '../Search/Search'
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
    this.initialTodoDate = [...this.initialTodoDate.slice(0, id), ...this.initialTodoDate.slice(id+1)]
  };

  addItem = (text) => {
    if(text === '') return;
    const newItem =this.createTodoItem(text);

    this.setState((state) => {
      const newArr = [...state.todoDate, newItem];
      return{
        todoDate: newArr
      }
    });
    this.initialTodoDate = [...this.initialTodoDate, newItem]
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

  initialTodoDate = [...this.state.todoDate];
  onSearch = (e) => {
    this.setState({
      todoDate: this.state.todoDate.filter(el => el.label.toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase()) > -1)
    });
    if (e.target.value === ''){
      this.setState({
        todoDate: this.initialTodoDate
      });
    }
  };

  render(){
    return (
      <div>
        <Heading
            toDo={this.state.todoDate.filter(el => !el.done).length}
            done={this.state.todoDate.length - this.state.todoDate.filter(el => !el.done).length}
        />
        <Search onSearch={this.onSearch}/>
        <Filter todos={this.state.todoDate}/>
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