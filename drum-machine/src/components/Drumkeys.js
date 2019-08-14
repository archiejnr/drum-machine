import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col} from 'reactstrap';

function Drumkeys(props){
  return (props.keys.map((item)=>(<Col
                                      audio={item.url}
                                      key={item.id}
                                      xs='3'
                                      className='drumKey'
                                      id={item.position}
                                      onClick={props.press}
                                      onKeyDown={props.keyboardPress}
                                      style={{border:'1px solid grey',
                                              borderRadius:'10px',
                                              margin:'2px',
                                              textAlign:'center'}}>
                                    {item.key}
                                    </Col>)))
}
export default Drumkeys;
