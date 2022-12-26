import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';

import "./index.css"

const Login=()=>{
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');



const LoginSubmit=(e)=>{
  e.preventDefault()


if (!email || !password) {
  setError('Please enter a valid email and password');
  return;
}

const user = JSON.parse(localStorage.getItem('user'));
console.log(user)
if (user==="" || user===null) {
setError('No user found with that email and password');
return;
}

if (user.email === email || user.password === password){
  navigate("/game")
}else{
  setError('*No user found with that email and password')
}

}

  return(
    <div className='main-container'>
      <form className='login-form' onSubmit={LoginSubmit}>
        <imp src="https://d13dtqinv406lk.cloudfront.net/company/images/2781.png" alt="logo"/>
        <div>
          <div className='login-label-container'>
            <label htmlFor="Email">Email:</label>
            <input className='login-input' type="text" id="Email" value={email} placeholder="Please enter Email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className='login-label-container'>
            <label htmlFor="pwd">Password:</label>
            <input className='login-input' id="pwd" value={password} type="password" placeholder="Please enter passowrd" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
        </div>
        {error && <span style={{ color: 'red' }}>{error}</span>}
        <button className='btn login' type="submit">LogIn</button>
        <p className='center'>OR</p>
        <Link  to="/signup">
        <button className='btn signup'>SignUp</button>
        </Link>
        
      </form>
    </div>
  )

}

export default Login