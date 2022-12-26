
//import { useNavigate} from 'react-router-dom';
import React, { useState } from 'react';



import "./index.css"

const SignUp=()=>{
  //const navigate = useNavigate();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [image,setImage]=useState("")
  const [dob,setDob]=useState("")
  const [address,setAddress]=useState("")
  const [phone,setPhone]=useState("")
  const [error,setError]=useState("")





  const SignupSubmit=(e)=>{
    e.preventDefault()

    if (!email || !image || !dob || !address || !phone) {
      setError('Please fill out all fields');
      return;
    }


    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    if (password.length<6){
      setError("Please enter valid password")
    }

    if(phone.length<10){
      setError("Please enter valid Phone number")
    }

  

    //Emailjs.send('service_esh8vsy', 'template_9hzj2sm', { email, password,image,dob,address,phone }, '3WiWSQJGwvWm-Z8wp')
      //.then((response) => {
        //localStorage.setItem('user', JSON.stringify({ email, password,image,dob,address,phone }));
        
      //navigate("/log")
        
      //})
      //.catch((error) => {
        //console.log('Error!', error);
        //setError(error.message);
      //});


  }



  return(
    <div className='main-container'>
      <form className='form-container' onSubmit={SignupSubmit}>
        <h1>Signup</h1>
      <div>
          <div className='label-container'>
            <label htmlFor="Email">Email:</label>
            <input className='input' type="text" id="Email" value={email} placeholder="Please enter Email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className='label-container'>
            <label htmlFor="pwd">Password:</label>
            <input className='input' id="pwd" value={password} type="password" placeholder="Please enter passowrd" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
        </div>
        <div className='label-container'>
          <label htmlFor='image'>Add Profile Pic:</label>
          <input className='input file' type="file" id="image" onChange={(e)=>setImage(e.target.files[0])} />
        </div>
        <div className='label-container'>
          <label htmlFor='dob'>Date of Birth:</label>
          <input className='input' type="date" id="dob" onChange={(e)=>setDob(e.target.value)}/>
        </div>
        <div className='label-container'>
          <label htmlFor='address'>Address:</label>
          <input className='input' type="text" id="address" onChange={(e)=>setAddress(e.target.value)}/>
        </div>
        <div className='label-container'>
          <label html="phone">Phone number:</label>
          <input className='input' type="text" id="phone" onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <button className='btn signup' type="submit">Sign Up</button>
        <p>{error}</p>
      </form>
    </div>
  )
}

export default SignUp
    