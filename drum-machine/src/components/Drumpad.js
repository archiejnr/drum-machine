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
      <Row style={{textAlign:'centre'}}>
        <br/>
        <div id="toggler" onClick={props.toggle}> 
          <div className="mod1 toggler">
          </div>
        </div>
      </Row>
    </Container>
  )
}
export default Drumpad
