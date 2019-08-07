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
        presed:false
      },{
        id:2,
        key:"W",
        src:"somthing",
        presed:false
      },{
        id:3,
        key:"E",
        src:"somthing",
        presed:false
      }]
    }
  }



  render(){
    return(<div id="drum" ><Drumpad keys={this.state.keys} className="row"/></div>)
  }
}

export default App;
