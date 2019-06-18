import React from 'react'
import TodoList from '../TodoList/TodoList'
import Input from '../Input/Input'
import Heading from '../Heading/Heading'
import Filter from '../Filter/Filter'
import './App.scss'


const App = () => {
  const isLogin = false;
  const loginBox = <span>Log in</span>;

  const todoDate = [
    {label: 'drink'},
    {label: 'make'},
    {label: 'learn'},
    {label: 'yes'}
  ];

  return (
      <div>
        {isLogin ? null : loginBox}
        <Heading/>
        <Input/>
        <Filter/>
        <TodoList todos={todoDate} onDeleted={id => console.log(`deleted ${id}`)}/>
      </div>
  )
};

export default App;