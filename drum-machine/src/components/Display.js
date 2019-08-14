import React from 'react';

//code starts here
function Display(props){
  return( <div onKeyPress={props.keyboardPress}>
            {props.value}
          </div>)
}
export default Display;
