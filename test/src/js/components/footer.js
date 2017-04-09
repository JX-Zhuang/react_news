import React from 'react';
export default class ComponentFooter extends React.Component{
  render(){
    return(
      <footer>
        版权©️{this.props.username}
      </footer>
    )
  }
}
