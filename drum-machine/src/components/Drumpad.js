import {Container,Row} from 'reactstrap';
import React from 'react';
import Drumkeys from './Drumkeys.js';
import '../App.css'


function Drumpad(props){
  return(
    <Container>
      <Row>
        <Drumkeys keys={props.keys} press={props.press} release={props.release} keyboardPress={props.keyboard}/>
      </Row>
      <Row style={{textAlign:'centre'}} className="mainRow">
        <br/>
        <span className="text">strout</span>
        <div id="toggler" onClick={props.mod}>
          <div className="mod1 toggler moveRight">
          </div>
        </div>
        <span className="text">echo</span>
      </Row>
    </Container>
  )
}
export default Drumpad
