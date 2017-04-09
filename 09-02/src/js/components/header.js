import React from 'react';
import ReactDOM from 'react-dom';
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
      <header onClick={this.switchHeader.bind(this)} style={styleComponentHeader.header} className='smallFontSize'>
        <h1>这里是头部123</h1>
      </header>
    )
  }
}
