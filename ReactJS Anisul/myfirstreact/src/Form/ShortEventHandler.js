import React, { useState } from 'react'
import style from './form.module.css'

export default function ShortEventHandler() {

    //const [name, setName] = useState("");
    //const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");
    //we can use the below useState object instead of above

    const [user, setUser] = useState({name: '', email: '', password: ''})
    const {name, email, password} = user         //destructuring

    // const handleNameChange = (e) =>{
    //     setUser({name: e.target.value, email, password})
    // }
    // const handleEmailChange = (e) =>{
    //     setUser({name, email: e.target.value, password})
    // }
    // const handlePasswordChange = (e) =>{
    //     setUser({name, email, password: e.target.value})
    // }

    const handleChange = (e) =>{
        //const fieldName = e.target.name; => ...user
        setUser({...user,[e.target.name]: e.target.value})

        // if(fieldName === "name"){
        //     setUser({name: e.target.value, email, password})
        // }
        // if(fieldName === "email"){
        //     setUser({name, email: e.target.value, password})
        // }
        // if(fieldName === "password"){
        //     setUser({name, email, password: e.target.value})
        // }
        console.log()
    }

    const handleSubmit = (e) =>{
        console.log("Form is submitted");
        // let userInfo = {
        //     name,
        //     email,
        //     password
        // };
        //console.log(name, email, password);
        console.log(user);
        e.preventDefault();
    }

    return (
        <div>
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" 
                    name="name" 
                    id="name" 
                    value={name}
                    onChange={handleChange} 
                    required />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" 
                    name="email" 
                    id="email"
                    value={email}
                    onChange={handleChange} 
                    required />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="Password">Password: </label>
                    <input type="Password" 
                    name="password" 
                    id="Password" 
                    value={password}
                    onChange={handleChange} 
                    required />
                </div>
                <div className={style.formGroup}>
                    <button type="submit">Register</button>
                </div>
   
            </form>
        </div>
    )
}
