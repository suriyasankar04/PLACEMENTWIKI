import axios from "axios";

const URL ='http://localhost:8080';
//const SignUp = (username, password, email,dateofbirth,yrofstyding,department,phoneno) => axios.post(URL+'/post', {username, password, email,dateofbirth,yrofstyding,department,phoneno});
const SignIn=(username,password)=>axios.post(URL+'/post',{username,password})

export {SignIn};