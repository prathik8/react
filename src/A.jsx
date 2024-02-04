   
 import React, { useState } from 'react'
 const A = (props) => {

    const [line,setline] = useState(false)
     
     const cut = () =>{
        setline(true)
     }
    
   return (
     
      <>
      <div className='style'>
     <li style={{textDecoration : line ? 'line-through' : "none"}}>{props.text}</li> <i class="fa fa-times" aria-hidden="true" onClick={cut} />
     </div>
 
    </>
   )
 }
 
 export default A