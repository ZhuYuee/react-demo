import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginType from './components/LoginType';
import Login126 from './components/Login126';
import Login163 from './components/Login163';
import MyComponent from './components/MyComponent'

//高阶组件应用
let c163 = LoginType(Login163);
let c126 = LoginType(Login126);

function App() {
  return (
    <div className="App">
        {/*1.使用普通函数返回，因为赋值的时候调用的组件返回的就是一个组件（函数）所以需要加个（）调用*/}
        {c163()}
        <hr/>
        {c126()}
        {/*2.使用属性代理*/}
         <MyComponent name="小祝" age="20"></MyComponent>
    </div>
  );
}

export default App;
