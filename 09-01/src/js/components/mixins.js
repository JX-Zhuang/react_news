const MixinLog = {
  componentDidMount(){
    console.log('mixin componentDidMount');
  },
  componentWillMount(){
    console.log('mixin componentWillMount');
  },
  log(){
    console.log("log");
  }
};
export default MixinLog;
