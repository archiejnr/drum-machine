import React from 'react';
import { Progress } from 'reactstrap';
import '../App.css';
import {Button} from 'reactstrap';
import {Row} from 'reactstrap'
//componets start here
function Slider(props){
  return(<div className="slider">
          <Progress  value={props.volume} color='success'/>
          <div className="buttons container">
            <Row>
              <i className='fas fa-volume-up' style={{fontSize:'30px',color:'grey'}}></i>
            </Row>
            <Row>
            <Button className="button increase" onClick={props.changeVolume} id="increment">+</Button>
            </Row>
            <Row>
              <Button className="button decrease" onClick={props.changeVolume} id="decrement">-</Button>
            </Row>
          </div>
        </div>)
}
export default Slider
