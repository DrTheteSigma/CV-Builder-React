import React from 'react'
import { useState } from 'react'
import WorkExpInfo from './WorkExpInfo'

const WorkExp = () => {
  
    
    const [eduArray,setEduArray] = useState([1])
    
    const addEducation = () =>{
    const id = Math.floor(Math.random()*10000) +1
    setEduArray(eduArray.concat(id))
    }
    const handleDelete = (id)=>{
        setEduArray(eduArray.filter((array)=>array !==id))
        }
    
    return (
        <div>
            {eduArray.map(task => (
                <WorkExpInfo key={task} id={task} handleDelete={handleDelete} ></WorkExpInfo>
            ))}
            <button onClick={addEducation} className="Addbtn" >Add</button>
        </div>
    )
    
   
}

export default WorkExp