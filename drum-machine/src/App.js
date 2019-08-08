import React from 'react';
import './App.css';
import Drumpad from './components/Drumpad.js';
import 'bootstrap/dist/css/bootstrap.min.css';

//code starts here

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      keys:[{
        id:1,
        key:"Q",
        src:"somthing",
        presed:false,
        position:'topLeft'
      },{
        id:2,
        key:"W",
        src:"somthing",
        presed:false,
        position:'topCenter'
      },{
        id:3,
        key:"E",
        src:"somthing",
        presed:false,
        position:'topRight'
      },{
        id:4,
        key:"A",
        src:"somthing",
        presed:false,
        position:'midLeft'
      },{
        id:5,
        key:"S",
        src:"somthing",
        presed:false,
        position:'midCenter'
      },{
        id:6,
        key:"D",
        src:"somthing",
        presed:false,
        position:'midRight'
      },{
        id:7,
        key:"Z",
        src:"somthing",
        presed:false,
        position:'bottomLeft'
      },{
        id:8,
        key:"X",
        src:"somthing",
        presed:false,
        position:'bottomCenter'
      },{
        id:9,
        key:"c",
        src:"somthing",
        presed:false,
        position:'bottomRight'
      }]
    }

    this.handlePress=this.handlePress.bind(this);
    this.handleRelease=this.handleRelease.bind(this);
  }

handlePress(){

    console.log('button pressed')
}
handleRelease(){

  console.log('mouse released')
}
  render(){
    return(<div id="drum" ><Drumpad keys={this.state.keys} press={this.handlePress} release={this.handleRelease}/></div>)
  }
}

export default App;
