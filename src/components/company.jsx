import React, { useState } from 'react'
import "./company.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Company(){
  const[name,setName]=useState([]);
  const[owner,setOwner]=useState([]);
  const[headquaters,setHeadquaters]=useState([]);
  const[founded,setFounded]=useState([]);
  const[revenue,setRevenue]=useState([]);
  const[website,setWebsite]=useState([]);
  const[url,setUrl]=useState([]);
  const navigate = useNavigate();
//     const[username,setUser] = useState([]);
//    const[password,setPassword] = useState([]);
//    const[email,setemail] = useState([]);
//    const[dateofbirth,setdateofbirth] = useState([]);
//    const[ yrofstyding,setyrofstyding] = useState([]);
//    const[department,setdepartment] = useState([]);
//    const[phoneno,setphoneno] = useState([]);

//    const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // const res = await axios.post('/signup/post',{username,password,email,dateofbirth,yrofstyding,department,phoneno})
//       navigate('/');
   
//     // console.log({username,password,email,dateofbirth,yrofstyding,department,phoneno})
//   }
const handlesubmit = async (e) =>{
  e.preventDefault();
  const res = await axios.post('/company/post',{name,owner,headquaters,founded,revenue,website,url})
  navigate("/");
  alert("register successfull")
}
  return (
    <div>
        <div class="login-box">
  <h2>DETAILS</h2>
  <form>
    <div class="user-box">
      <input type="text" placeholder='Name' name="" onChange={e=>setName(e.target.value)} required=""/>
      {/* <label>Username</label> */}
      <input type="text" placeholder="Owner" name="" onChange={e=>setOwner(e.target.value)}required=""/>
      {/* <label>Password</label> */}
      <input type="text" placeholder="Headquaters" name="" onChange={e=>setHeadquaters(e.target.value)} required=""/>
      <input type="text" placeholder="FounderYear" name="" onChange={e=>setFounded(e.target.value)} required=""/>
      <input type="text" placeholder="Revenue" name="" onChange={e=>setRevenue(e.target.value)} required=""/>
      <input type="text" placeholder="Website" name="" onChange={e=>setWebsite(e.target.value)} required=""/>
      <input type="text" placeholder="Url" name="" onChange={e=>setUrl(e.target.value)} required=""/>
     
    </div>
    <Link to="/" onClick={handlesubmit}>
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
  )
}
