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
