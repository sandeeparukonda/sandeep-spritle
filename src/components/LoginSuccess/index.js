import {Link} from "react-router-dom"

import "./index.css"
const LoginSuccess=()=>{
    return(
        <div className="ls-container">
   <div className="ls-con">
    <img className="logo" src="https://res.cloudinary.com/djclfohlq/image/upload/v1671973098/depositphotos_440621176-stock-illustration-check-mark-letter-logo-design_gkyxms.webp" alt="logo"/>
    <h1>Signup Successfully</h1>
    <Link to="/">
    <button className="btn login" type="button">Login</button>
    </Link>
   </div>
   </div>
    )
}

export default LoginSuccess