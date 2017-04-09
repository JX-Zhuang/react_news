import React from 'react';
import ReactDOM from 'react-dom';
export default class ComponentHeader extends React.Component{
  componentWillMount(){
    console.log('ComponentHeader - componentWillMount');
  }
  componentDidMount(){
    console.log('ComponentHeader - componentDidMount');
  }
  render(){
    return(
      <header>
        <h1>这里是头部123</h1>
      </header>
    )
  }
}
