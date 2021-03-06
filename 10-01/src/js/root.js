import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './components/list';
import ComponentDetails from './components/details';
import {Router,Route,hashHistoty} from 'react-router';
export default class Root extends React.Component{
  render(){
    return(
      <Router history={hashHistoty}>

        <Route component={Index} path='/'>
          <Route component={ComponentDetails} path='details'></Route>
        </Route>

        <Route component={ComponentList} path='/list'></Route>

      </Router>
    )
  }
}

ReactDOM.render( <Root /> , document.getElementById('example'));
