import {Container,Row} from 'reactstrap';
import React from 'react';
import Drumkeys from './Drumkeys.js';

function Drumpad(props){
  return(
    <Container>
      <Row>
        <Drumkeys keys={props.keys}/>
      </Row>
    </Container>
  )
}















export default Drumpad
