import React from 'react';
export default class BodyIndex extends React.Component{
  componentWillMount(){
    //定义你的逻辑即可
    console.log('BodyIndex - componentWillMount');
  }
  componentDidMount(){
    console.log('BodyIndex - componentDidMount');
  }
  render(){
    var userName = 'Jesse';
    var boolInput = true;
    var html = '<h1>html</h1>';
    return (
      <div>
        <h1>这里是主题部分</h1>
        <p>{userName==''?'用户未登陆':'用户名：'+userName}</p>
        <p><input type='button' value='默认按钮' disabled={boolInput}/></p>
        <div>{html}</div>
        <div dangerouslySetInnerHTML={{__html:html}}></div>
      </div>
    )
  }
}
