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
    const styleComponentHeader = {
      header:{
        backgroundColor:"#333",
        color:"#fff",
        paddingTop:"15px",
        paddingBottom:"15px"
      }
    };
    return(
      <header style={styleComponentHeader.header} className='smallFontSize'>
        <h1>这里是头部123</h1>
      </header>
    )
  }
}
