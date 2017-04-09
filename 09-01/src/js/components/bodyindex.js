import React from 'react';
import ReactDOM from 'react-dom';
import ReactMixin from 'react-mixin';

import BodyChild from './bodychild';
import MixinLog from './mixins';
const defaultProps = {
  username:'这是一个默认的用户名'
};

export default class BodyIndex extends React.Component {
    constructor() {
        super(); //调用基类的所有初始化方法
        this.state = {
            username: 'Jesse',
            age: 18
        }; //初始化复制
        console.log(this);
    }
    componentWillMount() {
        //定义你的逻辑即可
        console.log('BodyIndex - componentWillMount');
    }
    componentDidMount() {
        console.log('BodyIndex - componentDidMount');
    }
    handleChildValueChange(event){
      console.log(event);
      this.setState({
        age:event.target.value
      });
    }
    changeUserInfo(age) {
        this.setState({age: age});
        //第一种方式
        // var mySubmitButton = document.getElementById('submitButton');
        // ReactDOM.findDOMNode(mySubmitButton).style.color = 'red';
        //第二种方式
        console.log(this.refs.submitButton);
        this.refs.submitButton.style.color='red';
        MixinLog.log();
    }
    render() {
        var userName = 'Jesse';
        var boolInput = true;
        var html = '<h1>html</h1>';
        return (
            <div>
                <h1>这里是主题部分</h1>
                <p>接收到的父页面的属性：{this.props.username} {this.props.userid}</p>
                <p>自己的state：{this.state.age}</p>
                <input id="submitButton" ref="submitButton" type='button' value='提交' onClick={this.changeUserInfo.bind(this,99)}/>
                {/*父组件向子组件向子组件传参*/}
              <BodyChild {...this.props} id={123} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        )
    }
}

BodyIndex.propTypes = {
  userid:React.PropTypes.number.isRequired
};
BodyIndex.defaultProps = defaultProps;

ReactMixin(BodyIndex.prototype,MixinLog);
