import React from 'react';
import {useState} from 'react';


function Header(props) {
  const [msj, setMsj] = useState ('from change state');
  }
  return (
    <h1>Hello {props.title}</h1>
  )



// const Header = (props) => {
//   const [msj, setMsj] = useState ('(from change state)');
//   const handleClick = () => {
//     alert(msj);
//   };

//   return (
//     <div>
//       <h1>Hello (props.title)</h1>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )


export default Header

