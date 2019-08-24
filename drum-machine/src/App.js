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
        pressed:false,
        position:'topLeft',
        url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
      },{
        id:2,
        key:"W",
        src:"somthing",
        pressed:false,
        position:'topCenter',
        url:'http://www.betamonkeymusic.com/AltDrums/Alt%20and%20Modern%20Rock%20I%20Samples/fill_10%20180%20BPM.wav'
      },{
        id:3,
        key:"E",
        src:"somthing",
        pressed:false,
        position:'topRight',
        url:'http://www.apo33.org/pub/puredata/APO/librairies_PD/recup/groover/sound/606bass.wav'
      },{
        id:4,
        key:"A",
        src:"somthing",
        pressed:false,
        position:'midLeft',
        url:'http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Dirty%20South%20Kick%2003-3633-Free-Loops.com.mp3'
      },{
        id:5,
        key:"S",
        src:"somthing",
        pressed:false,
        position:'midCenter',
        url:'http://www.denhaku.com/r_box/sr16/sr16sd/sprpicrm.wav'
      },{
        id:6,
        key:"D",
        src:"somthing",
        pressed:false,
        position:'midRight',
        url:'http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Piccolo%20Snare-14385-Free-Loops.com.mp3'
      },{
        id:7,
        key:"Z",
        src:"somthing",
        pressed:false,
        position:'bottomLeft',
        url:'http://www.denhaku.com/r_box/sr16/sr16bd/purekick.wav'
      },{
        id:8,
        key:"X",
        src:"somthing",
        pressed:false,
        position:'bottomCenter',
        url:'http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Lil%20Jon%20Sub%20and%20Kick-8238-Free-Loops.com.mp3'
      },{
        id:9,
        key:"C",
        src:"somthing",
        pressed:false,
        position:'bottomRight',
        url:'http://s1download-universal-soundbank.com/mp3/sounds/14151.mp3'
      }],
      displayedKey:null,
      volume:10,
      phase:true
    }
//if there are any bindings to be done provided you dnt use the arrow functions
  }
//playing sound from the drumpad keys
playSound=(e)=>{
    const sound=new Audio(e.target.getAttribute('audio'));
    sound.play();
    this.displayKey(e)
    console.log();
}
//displaying keys pressed from the keyboard
displayKey=(e)=>{
  this.setState({
    displayedKey:e.target.getAttribute('id')
  })
}
//for icreasing and decreasing volume levels
handleSound=(e)=>{
  if (e.target.getAttribute('id')==='decrement'){
    this.setState({
      volume: this.state.volume<=0? 0:this.state.volume-10
    })
  }
  else{
    this.setState({
      volume: this.state.volume>=100? 100:this.state.volume+10
    })
  }
  console.log(this.state.volume)
}
mute=(e)=>{
  document.querySelectorAll('.volume').forEach((item)=>{
    item.classList.toggle('hide')
  })
  if(this.state.volume>0){
    this.setState({
      volume:0
    })
  }
  else {
    this.setState({
      volume:10
    })
  }
}
//for keyboard events
keyboardSoundPlayer=(item)=>{
  const sound=new Audio(item.url);
  sound.play();
  this.setState({
    displayedKey:item.position
  });
}
//callMe function to unpopulate the below handleKeyboard function
callMe=(e)=>{
    let pressed;
    pressed = this.state.keys.filter(item=>item.key===e.key.toUpperCase());
    this.keyboardSoundPlayer(pressed[0]);
    document.querySelector(`#${pressed[0].position}`).classList.toggle('keyboardPress');
    setTimeout(()=>{this.colorChanger(pressed[0])},100)
}

handleKeyboard=(e)=>{
;
  switch (e.key) {
    case 'q':this.callMe(e);
      break;
    case 'w':this.callMe(e);
      break;
    case 'e':this.callMe(e);
      break;
    case 'a':this.callMe(e);
      break;
    case 's':this.callMe(e);
      break;
    case 'd':this.callMe(e);
      break;
    case 'z':this.callMe(e);
      break;
    case 'x':this.callMe(e);
      break;
    case 'c':this.callMe(e);
      break;
    default:break;
  }
}
//handle the button color-change on keyboard pressed
  colorChanger=(x)=>{
    document.querySelector(`#${x.position}`).classList.toggle('keyboardPress');
  }
//adding keyboard eventlistener to the document after the UI renders
  componentDidMount(){
    document.addEventListener('keydown',this.handleKeyboard);
    document.querySelector('.toggler').innerHTML=this.state.phase;
  }
//handle the mod toggler
toggle=(e)=>{
      this.setState({phase:!this.state.phase});
  if(e.target.getAttribute('id')){
    e.target.querySelector('.toggler').classList.toggle('moveRight');
    e.target.querySelector('.toggler').classList.toggle('moveLeft');
    e.target.querySelector('.toggler').innerHTML=this.state.phase;
  }
  else{
    e.target.classList.toggle('moveRight');
    e.target.classList.toggle('moveLeft');
    e.target.innerHTML=this.state.phase;
  }
}
  render(){
    return(<div>
              <div id="drum">
                  <Drumpad keys={this.state.keys} press={this.playSound} keyboard={this.handleKeyboard} mod={this.toggle}/>
              </div>
              <div id="slider">
                  <Slider changeVolume={this.handleSound} volume={this.state.volume} mute={this.mute}/>
              </div>
              <div id="display">
                <Display value={this.state.displayedKey} />
              </div>
            </div>)
  }
}
export default App;
