import React from 'react';
import { Progress } from 'reactstrap';
import '../App.css';
import {Button} from 'reactstrap';
import {Row} from 'reactstrap'
//componets start here
function Slider(props){
  return(<div className="slider">
          <Progress  value="25" color='success'/>
          <div className="buttons container">
            <Row>
              <i className='fas fa-volume-up' style={{fontSize:'30px',color:'grey'}}></i>
            </Row>
            <Row>
            <Button className="button increase">+</Button>
            </Row>
            <Row>
              <Button className="button decrease">-</Button>
            </Row>
          </div>
        </div>)
}
export default Slider
