import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col} from 'reactstrap';

function Drumkeys(props){
    let arr=props.keys;
    console.log(arr)
  return (props.keys.map((item)=>(<Col
                                      key={item.id}
                                      className='drumKey'
                                      id={item.position}
                                      onMouseDown={props.press}
                                      onMouseLeave={props.release}
                                      style={{border:'1px solid grey',
                                              borderRadius:'10px',
                                              margin:'2px',
                                              textAlign:'center'}}>
                                    {item.key}
                                    </Col>)))
}

















export default Drumkeys;
