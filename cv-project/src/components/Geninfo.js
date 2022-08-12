import React, { useState } from "react";

const Geninfo = () => {
  const [toggleEdit, setToggleEdit] = useState(true);

  const [name, setName] = useState()
  const [lastname, setLastName] = useState()
  const [email, setEmail] = useState()
  const [number, setNumber] = useState()

  const handleSubmit =(e)=>{
    e.preventDefault()
    setToggleEdit(!toggleEdit)
    
  }


  if (toggleEdit) {
    return (
      <form onSubmit={handleSubmit}>
        <div className="EditGen center">
          <div>
            <label>Name</label>
            <input type="text" placeholder="John" value={name} onChange={(e)=> setName(e.target.value)} required></input>
          </div>

          <div>
            <label>Last Name:</label>
            <input type="text" placeholder="doe" value={lastname} onChange={(e)=> setLastName(e.target.value)} required></input>
          </div>

          <div>
            <label>Email: </label>
            <input type="email" placeholder="johndoe@gmail.com" value={email}  onChange={(e)=> setEmail(e.target.value)} required></input>
          </div>

          <div>
            <label>Phone number:</label>
            <input type="tel" placeholder="123-123-1234" value={number}   onChange={(e)=> setNumber(e.target.value)} required></input>
          </div>
        </div>

        <input type="submit" className="submitbtn"></input>
      </form>
    );
  } else {
    return(

      <div className="Geninfo">
        <div>
          <div>{`First name: ${name}`}</div>
          <div>{`Last name: ${lastname}`}</div>
          <div>{`Email: ${email}`}</div>
          <div>{`Phone number: ${number}`}</div>
        </div>

        <div style={{marginRight: "20px"}}><button onClick={handleSubmit}>Edit</button></div>
      </div>
    )
  }
};

export default Geninfo;
