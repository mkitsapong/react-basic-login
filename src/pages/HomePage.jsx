import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
    const [User, setUser] = useState({

    })
    const navigate = useNavigate();
    const logout = () =>{
        localStorage.removeItem("User")
        navigate("/")        
    }

    useEffect(() =>{
        if(!localStorage.getItem("User")) {
            navigate("/")
        } else {
            setUser(JSON.parse(localStorage.getItem("User")).user)
            console.log(User)
        }
    },[])
  return (
    <>
        <div className = "container">

        <h1 className=""> Welcome {User.fname} <span>{User.lname}</span> </h1>
        <h1> Email : {User.email} </h1>
        <img src= {User.avatar} alt="" />
        </div>

        <button className="btn btn-dark mx-5" onClick={logout}>Logout</button>
    </>
  )
}

export default HomePage