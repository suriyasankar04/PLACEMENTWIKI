import React, { useEffect } from 'react'
import { ReactDOM , useState} from 'react';
import "./login.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Landingpage from './landingpage';




export default function LoginDelete() {
     const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

   const[username,setUser] = useState([]);
   const[password,setPassword] = useState([]);

  const {id} = useParams();


  // User Login info

  // const database = [
  //   {
  //     username: "user1",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2"
  //   }
  // ]
  

  // const errors = {
  //   uname: "invalid username",
  //   pass: "invalid password"
  // };
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();
    
      const response = await  axios.post('http://localhost:8080/api/post',{username,password});
      
      if(response.data === "Login successful")
      {
        axios.delete(`/company/delete/${id}`).then(()=>{
            navigate("/home")
      })
      }
      else{
       alert(response.data)
        
      }
   
  //   var { uname, pass } = document.forms[0];
    
    
  //   // Find user login info
  //   const userData =database.find((user) => user.username === uname.value);
    
    // Compare user info
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //     navigate("/home");
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
    
  };
  
  // // Generate JSX code for error message
  // const renderErrorMessage = (name) =>
  // name === errorMessages.name && (
  //   <div className="error">{errorMessages.message}</div>
   // );
    
    // JSX code for login form
    const renderForm = (
      <div className="login-box10">
         <h2>LOGIN</h2>
      <form onSubmit={handleSubmit} >
        <div className="user-box10">
          
          <input type="text" name="uname" id='username' placeholder='Username' onChange={e=>setUser(e.target.value)} required />
          {/* {renderErrorMessage("uname")} */}
  
          <input type="password" name="pass" id='password'placeholder='Password' onChange={e=>setPassword(e.target.value)} required />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <Link to={`/update/${id}`} onClick={handleSubmit}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </Link>
  
        <h3>Dont have an Account</h3>
      </form>
        <div className="">
        <Link to ="/oct" style={{top:"40px" ,left:"20px"}} >SIGNUP</Link>
        </div>
    </div>
  );

  return (
    <div>
      {isSubmitted ? <div> <Link to ="/home" style={{top:"40px" ,left:"80px"}} >click here👉</Link> </div> : renderForm}
      </div>
   
  );
  
}

