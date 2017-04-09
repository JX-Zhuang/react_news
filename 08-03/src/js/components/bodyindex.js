import React from 'react';
import BodyChild from './bodychild';
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
                <p>{this.props.username}</p>
                <p>{this.state.age}</p>
                <input type='button' value='提交' onClick={this.changeUserInfo.bind(this)}/>
                <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        )
    }
}
