import React, { useState } from 'react'
import EduExpInfo from './EduExpInfo'

const EduExp = () => {

const [eduArray,setEduArray] = useState([1])

const addEducation = () =>{
const id = Math.floor(Math.random()*10000) +1
setEduArray(eduArray.concat(id))
}

const handleDelete = (id)=>{
    
    const newarray = eduArray.filter((array)=>array !==id)
    setEduArray(newarray)
    }

return (
    <div>
        {eduArray.map(task => (
            <EduExpInfo key={task} id={task} handleDelete={handleDelete}></EduExpInfo>
        ))}
        <button onClick={addEducation} className="Addbtn">Add</button>
    </div>
)

}

export default EduExp