/**
 * Created by Jesse on 17/3/29.
 */
var React = require("react");
var ReactDOM = require("react-dom");
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';
import 'antd/dist/antd.css';
export default class Index extends React.Component {
    constructor(){
      super();
      this.state = {
        username:'JesseZhuang'
      };
    }
    componentWillMount(){
      console.log('Index - componentWillMount');
    }
    componentDidMount(){
      console.log('Index - componentDidMount');
    }
    bindleChangeUsername(name){
      this.setState({
        username:name
      });
    }
    render() {
      var componentheader = <ComponentHeader/>;
        return (
          <div >
            {componentheader}
            <BodyIndex userid={2244} username={this.state.username}/>
            <div>
              {this.props.children}
            </div>
            <ComponentFooter/>
            <ComponentFooter/>
            <button onClick={this.bindleChangeUsername.bind(this,'Jiaxiang')}>change</button>
          </div>
        )
    }
}
