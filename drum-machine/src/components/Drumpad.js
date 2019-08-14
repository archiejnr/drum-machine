import {Container,Row} from 'reactstrap';
import React from 'react';
import Drumkeys from './Drumkeys.js';


function Drumpad(props){
  return(
    <Container>
      <Row>
        <Drumkeys keys={props.keys} press={props.press} release={props.release} keyboardPress={props.keyboard}/>
      </Row>
    </Container>
  )
}
export default Drumpad
