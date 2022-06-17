import React, {useState} from "react"
import "./Login.css"
import axios from "axios"
import {Link} from "react-router-dom"

export const Login = ({ setLoginUser}) => {

 

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:1020/login", user)
        .then(res => {
            console.log(res.data.user.name)
            alert(res.data.message)
            // setLoginUser(res.data.user)
       
        })
    }

    return (
        <div className="login">
            {console.log(user)}
            <h1 className="text-2xl font-semibold">Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
          <Link to="/">  <div className="pl-8 pr-8 bg-blue-500 h-10 rounded-md text-white pt-2 text-xl" onClick={login}>Login</div></Link>
            <div>or</div>
            <Link to="/register"> <div className="pl-8 pr-8 bg-blue-500  h-10 rounded-md text-white pt-2 text-xl">Register</div> </Link>
        </div>
    )
}

 