import React from 'react';
export default class ComponentHeader extends React.Component{
  render(){
    return (
      <header>
        <h1>
          我是头部 {this.props.user} {this.props.password}
        </h1>
        <button onClick={this.props.bindleChangePasswrd}>修改密码</button>
      </header>
    )
  }
};
