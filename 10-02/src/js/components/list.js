import React from 'react';
export default class ComponentList extends React.Component{
  render(){
    return(
      <div>
        <h2>This is List Id:{this.props.params.id}</h2>
      </div>
    )
  }
};
