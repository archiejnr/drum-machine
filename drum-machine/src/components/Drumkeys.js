import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col} from 'reactstrap';

function Drumkeys(props){
    let arr=props.keys;
    console.log(arr)
  return (props.keys.map((item)=>(<Col lg="6" key={item.id} className='drumKey'>{item.key}</Col>)))
}

















export default Drumkeys;
