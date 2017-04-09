import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import ComponentBody from './components/body';
class Index extends React.Component{
  constructor(){
    super();
    this.state = {
      user:'admin',
      password:'123456',
      age:10,
      username:'JesseZhuang'
    };
  }
  bindleChangePasswrd(){
    this.setState({
      password:Math.random()
    });
  }
  bindleChangeAge(e){
    this.setState({
      age:e.target.value||++this.state.age
    });
  }
  render(){
    let val = '自定义一个变量';
    return (
      <div>
        <ComponentHeader {...this.state} bindleChangePasswrd={this.bindleChangePasswrd.bind(this)}/>
        <p>user:{this.state.user}</p>
        <p>password:{this.state.password}</p>
        <p>age:{this.state.age}</p>
        <button onClick={this.bindleChangePasswrd.bind(this)}>changePassword</button>
        {val}
        <ComponentBody {...this.state} bindleChangeAge={this.bindleChangeAge.bind(this)}/>
        <ComponentFooter username={'庄嘉祥'}/>
      </div>
    )
  }
};
ReactDOM.render(<Index/>,document.getElementById('container'));
