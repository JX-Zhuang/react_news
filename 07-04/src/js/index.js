/**
 * Created by Jesse on 17/3/29.
 */
var React = require("react");
var ReactDOM = require("react-dom");
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';
class Index extends React.Component {
    render() {
      var componentheader = <ComponentHeader/>;
        return (
          <div >
            {componentheader}
            <BodyIndex/>
            <ComponentFooter/>
          </div>
        )
    }
}

ReactDOM.render( < Index / > , document.getElementById('example'));
