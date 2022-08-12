import React, { useState } from 'react'


const WorkExpInfo = ({id, handleDelete}) => {

    const [toggleEdit, setToggleEdit] = useState(true);

    const [companyName, setSchoolName] = useState()
    const [title, setTitle] = useState()
    const [fromDate, setFromDate] = useState()
    const [toDate, setToDate] = useState()
    const [text, setText] = useState()

    
    const handleSubmit =(e)=>{
        e.preventDefault()
        setToggleEdit(!toggleEdit)
        
      }
    
    if (toggleEdit) {
        return ( 
          <form onSubmit={handleSubmit}>
            <div className="EditGen center" >
              <div>
                <label>Company name: </label>
                <input type="text" placeholder="Google" value={companyName} onChange={(e)=> setSchoolName(e.target.value)} required></input>
              </div>
    
              <div>
                <label>Position Title:</label>
                <input type="text" placeholder="CEO" value={title} onChange={(e)=> setTitle(e.target.value)} required></input>
              </div>
    
              <div>
                <label>From: </label>
                <input type="date" value={fromDate}  onChange={(e)=> setFromDate(e.target.value)} required></input>
              </div>
    
              <div>
                <label>To:</label>
                <input type="date"  value={toDate}   onChange={(e)=> setToDate(e.target.value)} required></input>
              </div>

              <div className='textarea'>
                <label>Main Roles:</label>
                <textarea value={text}   onChange={(e)=> setText(e.target.value)} required></textarea>
              </div>
              
            </div>

            <div className='thebtns'>
            <input type="submit" className="submitbtn"></input>
            <input type="button" value="Delete" onClick={()=>handleDelete(id)} className="Deletebtn"></input>
            </div>

          </form>
        );
      } else {
        return(
    
          <div className="Geninfo">
            <div>
              <div>{`Company name: ${companyName}`}</div>
              <div>{`Tile given: ${title}`}</div>
              <div>{`Start Date: ${fromDate}`}</div>
              <div>{`End Date: ${toDate}`}</div>
              <div>{`Main Roles: ${text}`}</div>
            </div>
    
            <div style={{marginRight: "20px"}}><button onClick={handleSubmit}>Edit</button></div>
          </div>
    
        )
    
    }


}

export default WorkExpInfo