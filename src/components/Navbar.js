import React, {useEffect} from 'react'
import {Link,useLocation,useHistory } from "react-router-dom";


const Navbar = (props) => {

  let location = useLocation();
  // const navigate=useNavigate(); 
    useEffect(() => {
     console.log(location)
   }, [location]);
   const history=useHistory();
   const handel=()=>{
    if(!localStorage.getItem('token')){
      props.showAleart("Please Login to Continue","danger")
    }
   }
   const handelLogOut=()=>{
    localStorage.removeItem('token')
    history.push("/")
   }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
       <div className="container-fluid">
     <Link className="navbar-brand" to="/home"><span>C</span>loud<span>N</span>OTES</Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname=== "/home"?"active":""}`} onclick={handel}aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname=== "/about"?"active":""}`} to="/about">About</Link>
        </li>
       </ul>
       {!localStorage.getItem('token')?< form className="d-flex">
        <Link className="btn btn-outline-success mx-1" to="/login" type="button">LogIn</Link>
        <Link className="btn btn-outline-success mx-1" to="/signup"  type="button">SignUp</Link>
        </form> :<button className="btn btn-outline-success mx-1" onClick={handelLogOut} type="button">LogOut</button> }
    </div>
  </div>
</nav>
  )
}

export default Navbar
