import React, {useState} from "react"
import "./Login.css"
import axios from "axios"


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
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" >Register</div>
        </div>
    )
}

 