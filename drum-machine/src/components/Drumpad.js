import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Drumpad(props){
    let arr=props.keys;
    console.log(arr)
  return (props.keys.map((item)=>(<div key={item.id} className='drumKey col-lg-4'>{item.key}</div>)))
}

















export default Drumpad;
