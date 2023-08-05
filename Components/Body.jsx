import React from 'react'


function Body() {
    const handleClick = () => {
        alert(msj)
    }
  return (
    <button onClick={handleClick}>Click Me!</button>
  )
}

export default Body