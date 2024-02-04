
import React, { useState } from 'react'
import A from './A'

const Todolist = () => {

    const [val , setval] = useState("")
    const [item ,setitem] = useState([])
     
   const Value  = (event) => {
        setval(event.target.value)
   }

   const abc = () => {
     setitem((olde) => {
        return [...olde ,val]
     })
     setval(" ");
   }


  return (
    <div>
        <div className='container'>
            <div className='box'>
            <h2>To-do-list</h2>

            <input type='text' placeholder='enter your items' value={val} onChange={Value}></input>
            <button onClick={abc}> + </button>
            <ul>
               { item.map((itemval) => {
                 return <A  text= {itemval}/>
                })}
            </ul>

            </div>
        </div>
    </div>
  )
}

export default Todolist