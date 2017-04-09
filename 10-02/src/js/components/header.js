import React from 'react';
import {Link} from 'react-router';
import ReactDOM from 'react-dom';
var headerCss = require('../../css/header.css');
export default class ComponentHeader extends React.Component{
  constructor(){
    super();
    this.state = {
      miniHeader:false
    };
  }
  componentWillMount(){
    console.log('ComponentHeader - componentWillMount');
  }
  componentDidMount(){
    console.log('ComponentHeader - componentDidMount');
  }
  switchHeader(){
    this.setState({
      miniHeader:!this.state.miniHeader
    });
  }
  render(){
    const styleComponentHeader = {
      header:{
        backgroundColor:"#333",
        color:"#fff",
        paddingTop:this.state.miniHeader?"3px":"15px",
        paddingBottom:this.state.miniHeader?"3px":"15px"
      }
    };
    return(
      <header style={styleComponentHeader.header} className={headerCss.miniFooter}>
        <h1>这里是头部123</h1>
        <ul>
          <li><Link to={`/`}>首页</Link></li>
          <li><Link to={`/details`}>嵌套的详情页</Link></li>
          <li><Link to={`/list/1243`}>列表页</Link></li>
        </ul>
      </header>
    )
  }
}
