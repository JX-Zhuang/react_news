import React from 'react';
var  footerCss = require('../../css/footer.css');
export default class ComponentFooter extends React.Component{
  componentWillMount(){
    //定义你的逻辑即可
    console.log('ComponentFooter - componentWillMount');
  }
  componentDidMount(){
    console.log('ComponentFooter - componentDidMount');
  }
  render(){
    console.log(footerCss);
    return (
      <footer class={footerCss.miniFooter}>
        <h1>这里是尾部</h1>
        <div class={footerCss.test}>123</div>
        <div class={footerCss.test}>123</div>
      </footer>
    )
  }
}
