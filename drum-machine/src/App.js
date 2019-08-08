import React from 'react';
import './App.css';
import Drumpad from './components/Drumpad.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/Slider.js';
import Display from './components/Display.js';
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
        position:'topLeft',
        url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
      },{
        id:2,
        key:"W",
        src:"somthing",
        presed:false,
        position:'topCenter',
        url:'http://www.betamonkeymusic.com/AltDrums/Alt%20and%20Modern%20Rock%20I%20Samples/fill_10%20180%20BPM.wav'
      },{
        id:3,
        key:"E",
        src:"somthing",
        presed:false,
        position:'topRight',
        url:'http://www.apo33.org/pub/puredata/APO/librairies_PD/recup/groover/sound/606bass.wav'
      },{
        id:4,
        key:"A",
        src:"somthing",
        presed:false,
        position:'midLeft',
        url:'http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Dirty%20South%20Kick%2003-3633-Free-Loops.com.mp3'
      },{
        id:5,
        key:"S",
        src:"somthing",
        presed:false,
        position:'midCenter',
        url:'http://www.denhaku.com/r_box/sr16/sr16sd/sprpicrm.wav'
      },{
        id:6,
        key:"D",
        src:"somthing",
        presed:false,
        position:'midRight',
        url:'http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Piccolo%20Snare-14385-Free-Loops.com.mp3'
      },{
        id:7,
        key:"Z",
        src:"somthing",
        presed:false,
        position:'bottomLeft',
        url:'http://www.denhaku.com/r_box/sr16/sr16bd/purekick.wav'
      },{
        id:8,
        key:"X",
        src:"somthing",
        presed:false,
        position:'bottomCenter',
        url:'http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Lil%20Jon%20Sub%20and%20Kick-8238-Free-Loops.com.mp3'
      },{
        id:9,
        key:"c",
        src:"somthing",
        presed:false,
        position:'bottomRight',
        url:'http://s1download-universal-soundbank.com/mp3/sounds/14151.mp3'
      }],
      displayedKey:null
    }
//if there are any bindings to be done provided you ddnt use the arrow functions
  }
playSound=(e)=>{
    const sound=new Audio(e.target.getAttribute('audio'));
    sound.play();
    this.displayKey(e)
}
displayKey=(e)=>{
  this.setState({
    displayedKey:e.target.getAttribute('id')
  })
}
  render(){
    return(<div>
              <div id="drum" >
                  <Drumpad keys={this.state.keys} press={this.playSound}/>
              </div>
              <div id="slider">
                  <Slider/>
              </div>
              <div id="display">
                <Display value={this.state.displayedKey}/>
              </div>
            </div>)
  }
}
export default App;
