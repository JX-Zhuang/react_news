import React from 'react';
export default class ComponentBodyChild extends React.Component{
  render(){
    return(
      <div>
        我是Body的儿子
        <p>爷爷的名字：{this.props.username}</p>
        <p>爷爷的年龄：{this.props.age}</p>
        <button onClick={this.props.bindleChangeAge}>改变爷爷的名字</button>
        <input onChange={this.props.bindleChangeAge} />
      </div>
    )
  }
}
