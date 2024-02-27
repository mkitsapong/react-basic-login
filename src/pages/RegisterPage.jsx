import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
   const [fname, setFname] = useState("")
   const [lname, setLname] = useState("")
   const [username, setUsername] = useState("")
   const [password ,setPassword] = useState("")
   const [email, setEmail] = useState("")
   const [avatar, setAvatar] = useState("")
   const [password2, setPassword2] = useState("")
    const navigate = useNavigate();
    // useEffect(() => {
    //     if(localStorage.getItem("User")) {
    //         navigate("/home")
    //     }
    // },[])

    const onClick = async (e) => {
      e.preventDefault();
        if(password == password2){
          register()
        } else {
          toast.error("รหัสผ่านไม่ตรงกัน!");
        }
    }
    const register = async() => {
const response = await axios.post("https://www.melivecode.com/api/users/create", {
    "fname" : fname,
    "lname" : lname,
    "username" : username,
    "password" : password,
    "email" : email,
    "avatar" : avatar
})
        if(response.status == 200){
            toast.success("สมัครสมาชิกสำเร็จแล้ว!");
            navigate("/")
        }
    }

  return (
<>
<div className = "container">
    <div>
        <h1>RegisterPage</h1>
    </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
    <input type="text" className="form-control" onChange={(e) => setFname(e.target.value)} id="exampleFormControlInput1" placeholder="Fullname" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Surname</label>
    <input type="text" className="form-control" onChange={(e) => setLname(e.target.value)} id="exampleFormControlInput1" placeholder="name@example.com" />
  </div> 
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
    <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)} id="exampleFormControlInput1" placeholder="Password" />
  </div> 
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} id="exampleFormControlInput1" placeholder="Address" />
  </div> 
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Password Confirm</label>
    <input type="password" className="form-control" onChange={(e) => setPassword2(e.target.value)} id="exampleFormControlInput1" placeholder="Address" />
  </div> 
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">email</label>
    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} id="exampleFormControlInput1" placeholder="url Image" />
  </div> 
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">avatar</label>
    <input type="email" className="form-control" onChange={(e) => setAvatar(e.target.value)} id="exampleFormControlInput1" placeholder="url Image" />
  </div> 
    
  <div className="mb-3">
  <button type="button" className="btn btn-dark" onClick={onClick}>
      Register
    </button>
  </div>

    <div className="mb">
        <Link to = "/"> มีผู้ใช้งานอยู่แล้ว </Link>    
    </div>
    <ToastContainer />

</div>
</>
  )
}

export default RegisterPage