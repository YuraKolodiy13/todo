import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './components/TodoList/TodoList'
import Input from './components/Input/Input'
import Heading from './components/Heading/Heading'


const App = () => {
  const isLogin = false;
  const loginBox = <span>Log in</span>;

  const todoDate = [
    {label: 'drink', important: false},
    {label: 'make', important: true},
    {label: 'learn', important: true},
    {label: 'yes', important: false}
  ];

  return (
      <div>
        {isLogin ? null : loginBox}
        <Heading/>
        <Input/>
        <TodoList todos={todoDate}/>
      </div>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));