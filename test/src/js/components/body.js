import React from 'react';
import ReactMixin from 'react-mixin';
import ComponentBodyChild from './bodychild';
import MixinLog from './mixins';
const defaultProps = {
  username:'庄嘉祥'
};
export default class ComponentBody extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '庄嘉祥',
            age: 10
        }
    }
    bindleChangeAge() {
        this.setState({
            age: ++this.state.age
        });
        this.refs.button.style.color='red';
        MixinLog.log();
    }
    render() {
      const styleComponentBody = {
        border:'1px solid #333'
      }
        return (
          <div style={styleComponentBody}>
            我是Body
            <div>
            <h2>自己的state</h2>
            <p>姓名：{this.state.username}</p>
            <p>年龄：{this.state.age}</p>
            </div>
            <div>
            <h2>父级传来的props</h2>
            <p>爸爸的名字:{this.props.username}</p>
            <p>爸爸的年龄:{this.props.age}</p>
            </div>
            <button ref="button" onClick={this.bindleChangeAge.bind(this)}>增加年龄</button>
            <ComponentBodyChild {...this.props}/ >
          </div>
        )
    }
};
ComponentBody.propTypes = {
  age:React.PropTypes.number.isRequired
}
ComponentBody.defaultProps = defaultProps;
ReactMixin(ComponentBody.prototype,MixinLog);
