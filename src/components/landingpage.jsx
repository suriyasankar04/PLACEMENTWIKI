import React, { useEffect, useState } from 'react'
import './landingpage.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Amazon from './amazon';

export default function Landingpage({navigation}) {
  const[post,setPost]=useState([]);
  const[username,setUsername]=useState([]);
  const[isLoggedIn,setIsLogged]=useState(false);
  
  axios.get(`/company/get`).then((res)=>{
    setPost(res.data); 
    
  })
  useEffect(()=>{
    const username = localStorage.getItem("username");
    setIsLogged(!!username);
    setUsername(username);
    
  })

  
  const navigate = useNavigate(); 
  const handlechanage = () =>{}
  const handleLogout = () => {
    // Logic for handling logout
    // Redirect the user to the login page or perform any other necessary actions
    localStorage.removeItem("username");
    setIsLogged(false);
    alert("Logged out successfully");
    navigate("/");
  };
  const handleAdd =  () => {
    if(isLoggedIn){

      // Add your update logic here
      navigate("/details");
      
    }
    else{
      navigate("/login");
    }
    
  };
  return (
    <div>
      
        <div class="header1">
        <h1>PLACEMENTWIKI</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>

      <div className='image-container'>
    <div class="navbar">
        <a href="#">HOME</a>
      
        <Link to="/about">ABOUT US</Link>
      </div>
        {/* <img src="https://www.pexels.com/photo/blue-body-of-water-5412/" /> */}

      <div class="ter">
      <button className="addbut" onClick={handleAdd}>Add</button>

        <h2>
          ELEVATING POSSIBILITIES THROUGH TECHNOLOGY
          
          </h2>
      </div>
      {/* <div className='sc2'>

        <input type="search" onkeyup="search()" id="searchbar" placeholder="Search.." />
      </div> */}
    

        {/* <div class="tef">
          <input type="image" id='username' src={require("D:/PlacementWiki/frontend/src/amazon.webp")} name="amazon" onClick={handlechanage}/>
        </div> */}
       {post.map((game)=>(  
         
         <Link to={`/amazon/${game.name}`}>

           <img src= {game.url} className="rounded-button login-cta" onClick={handlechanage}></img>
        </Link>
      
      
      ))
    }
    
    </div>
    </div>
  )
}
