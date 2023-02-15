import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUp = (props) => {
  const history=useHistory();
  const [credentials, setCredentials] = useState({name:"",email:"", password:""})
  const handelSubmit=async(e)=>{
    e.preventDefault();
    // const {name,email,password}=credentials;
    const response = await fetch("https://cloud-notebook.up.railway.app/api/auth/creatUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name:credentials.name, email:credentials.email,password:credentials.password}),
    });
    const json= await response.json();
    console.log(json);
    if(json.success){
      // redirect 
      localStorage.setItem('token',json.AuthenticationToken)
      history.push("/home")
      props.showAlert("Your account has been created successfully","success")
    }
    else{
      props.showAlert("Invalid Credentials","danger")
    }
  }
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <div className="gap_class">
      <h1 style={{textAlign:"center"}}>Sign up</h1>
      <form onSubmit={handelSubmit}>
      <div className="mb-3 ">
          <label htmlFor="NameInputEmail1" className="form-label">
             Name
          </label>
          <input
            type="name" className="form-control" id="name" name= "name"  onChange={onChange} value={credentials.name} aria-describedby="nameHelp"/>
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email ddress
          </label>
          <input
            type="email" className="form-control" id="email1" name= "email"  onChange={onChange} value={credentials.email} aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" name="password" onChange={onChange} required minLength={5} value={credentials.password}  id="password"/>
        </div>
        <button type="submit" className="btn btn-primary">
          SignUp
        </button>
      </form>
    </div>
  )
}

export default SignUp