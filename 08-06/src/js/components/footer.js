import React from 'react';
export default class ComponentFooter extends React.Component{
  componentWillMount(){
    //定义你的逻辑即可
    console.log('ComponentFooter - componentWillMount');
  }
  componentDidMount(){
    console.log('ComponentFooter - componentDidMount');
  }
  render(){
    return (
      <footer>
        <h2>这里是尾部</h2>
      </footer>
    )
  }
}
