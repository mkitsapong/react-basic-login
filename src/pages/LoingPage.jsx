import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoingPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


useEffect(() => {
    if(localStorage.getItem("User")) {
        navigate("/home")
    }
},)


const navigate = useNavigate();
    const onClick = async() => {
         const response = await axios.post("https://www.melivecode.com/api/login",{
            "username" : username,
            "password" : password,
            "expiresIn" : 60000
         })
        //  console.log(response.data)
         if(response.status == 200){
            toast.success("เข้าสู่ระบบสำเร็จแล้ว")
            localStorage.setItem("User", JSON.stringify(response.data)) 
            navigate("/home")
         } else {
          toast.error("เข้าสู่ระบบไม่สำเร็จ")
         }
    }


  return (
<>
<div className = "container">
    <div>
        <h1>Login</h1>
    </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
    <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)} id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} id="exampleFormControlInput1" placeholder="Password" />
  </div>    
  <div className="mb-3">
  <button type="button" className="btn btn-dark" onClick={onClick}>
      Login
    </button>
  </div>
  <div className="mb">
        <Link to = "/register"> ยังไม่มีผู้ใช้งาน </Link>    
    </div>
    <ToastContainer />
</div>
</>
  )
}

export default LoingPage