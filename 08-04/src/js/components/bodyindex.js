import React from 'react';
import BodyChild from './bodychild';

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
    changeUserInfo() {
        console.log(this)
        this.setState({age: 50});
    }
    render() {
        // setTimeout(()=>{
        //   // this.state.username = 'zhuang';
        //   this.setState({
        //     username:'Zhuang',
        //     age:20
        //   }); //设置state
        // },2000);
        var userName = 'Jesse';
        var boolInput = true;
        var html = '<h1>html</h1>';
        return (
            <div>
                <h1>这里是主题部分</h1>
                <p>接收到的父页面的属性：{this.props.username} {this.props.userid}</p>
                <p>自己的state：{this.state.age}</p>
                <input type='button' value='提交' onClick={this.changeUserInfo.bind(this)}/>
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
