import { useState } from "react";
import React from 'react'

const EduExpInfo = ({handleDelete, id}) => {
const [toggleEdit, setToggleEdit] = useState(true);

const [schoolName, setSchoolName] = useState()
const [title, setTitle] = useState()
const [fromDate, setFromDate] = useState()
const [toDate, setToDate] = useState()

const handleSubmit =(e)=>{
    e.preventDefault()
    setToggleEdit(!toggleEdit)
    
  }

 

if (toggleEdit) {
    return ( 
      <form onSubmit={handleSubmit}>
        <div className="EditGen center" >
          <div>
            <label>School name: </label>
            <input type="text" placeholder="University of google" value={schoolName} onChange={(e)=> setSchoolName(e.target.value)} required></input>
          </div>

          <div>
            <label>Title of degree:</label>
            <input type="text" placeholder="Computer Science" value={title} onChange={(e)=> setTitle(e.target.value)} required></input>
          </div>

          <div>
            <label>From: </label>
            <input type="date" value={fromDate}  onChange={(e)=> setFromDate(e.target.value)} required></input>
          </div>

          <div>
            <label>To:</label>
            <input type="date"  value={toDate}   onChange={(e)=> setToDate(e.target.value)} required></input>
          </div>
        </div>

        <div className="thebtns">
        <input type="submit" className="submitbtn"></input>
        <input type="button" value="Delete" onClick={()=>handleDelete(id)} className="Deletebtn"></input>
        </div>

      </form>
    );
  } else {
    return(

      <div className="Geninfo">
        <div>
          <div>{`School name: ${schoolName}`}</div>
          <div>{`Tile given: ${title}`}</div>
          <div>{`Start Date: ${fromDate}`}</div>
          <div>{`End Date: ${toDate}`}</div>
        </div>

        <div style={{marginRight: "20px"}}><button onClick={handleSubmit}>Edit</button></div>
      </div>

    )

}
}

export default EduExpInfo