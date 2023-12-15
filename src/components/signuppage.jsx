import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./signup.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Signuppage() {
  const[username,setUser] = useState([]);
   const[password,setPassword] = useState([]);
   const[email,setemail] = useState([]);
   const[dateofbirth,setdateofbirth] = useState([]);
   const[ yrofstyding,setyrofstyding] = useState([]);
   const[department,setdepartment] = useState([]);
   const[phoneno,setphoneno] = useState([]);

   const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/signup/post',{username,password,email,dateofbirth,yrofstyding,department})
    const rese = await axios.post('/post',{username,password})
      navigate('/');
   
    // console.log({username,password,email,dateofbirth,yrofstyding,department,phoneno})
  }
  return (
    <>
    {/* <div>
    <div className="login-box">
 <div className="login-form">
        <div className="title">Sign up</div>
        <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Name </label>
          <input type="text" placeholder="Username" id="username"  onChange={e=>setUser(e.target.value)} required />
         
        </div>
        <div className="input-container">
          <label>Password </label>
          <input autoComplete="off" type="password" placeholder="Password" id="password"  onChange={e=>setPassword(e.target.value)} required />
       
        </div>
        <div className="input-container">
            <label>Email</label>
            <input type="email" placeholder="Email" id="email" onChange={e=>setemail(e.target.value)}  required />
        </div>
        <div className="input-container">
            <label>Date Of Birth</label>
            <input type="text" name="dob"id='dateofbirth' onChange={e=>setdateofbirth(e.target.value)} required />
        </div>
        <div className='input-container'>
            <label>Year Of Studying</label>
            <input type="text" name="yos" id='yrofstyding' onChange={e=>setyrofstyding(e.target.value)} required />
        </div>
        <div className="input-container">
            <label>Department</label>
            <input type="text" name="dept" id='department'onChange={e=>setdepartment(e.target.value)} required />
        </div>
        <div className="input-container">
            <label>Phone No</label>
            <input autoComplete="off" type="number" placeholder="Mobile" id="phoneno" onChange={e=>setphoneno(e.target.value)} required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      </div>
      </div>
      </div>
    </div> */}
    <div className='bgsign'>

    <div class="login-box8">
  <h2>SIGNUP</h2>
  <form>
    <div class="user-box1">
    <input type="text" placeholder="Username" id="username"  onChange={e=>setUser(e.target.value)} required />
      {/* <label>Username</label> */}
      <input autoComplete="off" type="text" placeholder="Password" id="password"  onChange={e=>setPassword(e.target.value)} required />
      {/* <label>Password</label> */}
      <input type="text" placeholder="Email" id="email" onChange={e=>setemail(e.target.value)}  required />
      <input type="text" placeholder='DateOfBirth' name="dob"id='dateofbirth' onChange={e=>setdateofbirth(e.target.value)} required />
      <input type="text" placeholder='YearOfStudying' name="yos" id='yrofstyding' onChange={e=>setyrofstyding(e.target.value)} required />
      <input type="text" placeholder='Department' name="dept" id='department'onChange={e=>setdepartment(e.target.value)} required />
    </div>
    <Link to="/" onClick={handleSubmit}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </Link>
  </form>
</div>

    </div>
    </>
  )
}
