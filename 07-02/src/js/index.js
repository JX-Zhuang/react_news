/**
 * Created by Jesse on 17/3/29.
 */
var React = require("react");
var ReactDOM = require("react-dom");
import ComponentHeader from './components/header';
class Index extends React.Component {
    render() {
        return (
          <div >
            <ComponentHeader/ >
            <h2>页面主体</h2>
          </div>
        )
    }
}

ReactDOM.render( < Index / > , document.getElementById('example'));
