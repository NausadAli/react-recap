import React from 'react'

function ComponentOne({count, onClickHandler}) {
   
   const handleClick = ()=> onClickHandler();
  
   return (
    <div>
         <p>{count}</p>
         <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default ComponentOne