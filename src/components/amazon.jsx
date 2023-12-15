import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./amazon.css"
import amazon from "./amazon.webp";
export default function Amazon() {
  // const [gamesx, setGamesx] = useState([]);
  // const res = axios.get("http://localhost:8080/company/get")
  // setGamesx(res.data);
  // console.log(res.data);

  const {id} = useParams();
 const navigate = useNavigate();
  const[game,setGame]= useState([]);
  const[name,setName]=useState([]);
  const[owner,setOwner]=useState([]);
  const[headquaters,setHeadquaters]=useState([]);
  const[founded,setFounded]=useState([]);
  const[revenue,setRevenue]=useState([]);
  const[website,setWebsite]=useState([]);
  const[isLoggedIn,setIsLogged]=useState(false);
  const[username,setUsername]=useState([]);
  const [post, setPost] = useState({
    name:"",
    owner:"",
     headquaters:"",
   founded:"",
    revenue:"",
     website:"",
  });
  // const { navigation } = this.props;
  //   const itemId = navigation.getParam('Name', 'NO-ID');
//  useEffect(()=>{
//   axios.get(`/company/getdata/${id}`).then((res)=>{
//     console.log(res.data);
//     setPost(res.data); 
//    }
//   )

//  },[])
useEffect(()=>{
  axios.get(`/company/getdata/${id}`).then((res)=>{
    setGame(res.data); 
    
    const username = localStorage.getItem("username");
    setIsLogged(!!username);
    setUsername(username);
      },[])
      
    }
    )
    
    const handleUpdate = async () => {
      if(isLoggedIn){

        // Add your update logic here
        navigate(`/update/${id}`);
        
      }
      else{
        navigate(`/login`);
      }
      console.log("Update button clicked");
    };
  
    const handleDelete = () => {
      if(isLoggedIn){

        // Add your update logic here
        
        axios.delete(`/company/delete/${id}`).then(()=>{
          navigate("/")
          window.location.reload();
        })
      }
      else{
        navigate(`/login`);
      }
      // Add your delete logic here
      console.log("Delete button clicked");
    };
    // const loadGame = async () => {
    //   try {
    //       const res = await axios.get(`/company/getdata/${id}`) ;
    //       setGame(res.data);
    //   } catch (err) {
    //       console.err("Failed to load game:", err);
    //   }
    // };
  return (
    <div className='imgcom'>
       <div class="navbar">
        <Link to="/">HOME</Link>
      
        <Link to="/about">ABOUT US</Link>
      </div>

    <div className="container">
    <h1 className="title">{game.name}</h1>
    <ul className="game-info">
      <li>
        <strong>Owner:</strong> {game.owner}
      </li>
      <li>
        <strong>Headquarters:</strong> {game.headquaters}
      </li>
      <li>
        <strong>Founded:</strong> {game.founded}
      </li>
      <li>
        <strong>Revenue:</strong> {game.revenue}
      </li>
      <li>
        <strong>Website:</strong> {game.website}
      </li>
    </ul>
    <div className="button-container2">
        <button  className="rounded-button2 update-button" onClick={handleUpdate}>
          Update
        </button>
        <button className="rounded-button2 delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
  </div>
    </div>
  )
}
