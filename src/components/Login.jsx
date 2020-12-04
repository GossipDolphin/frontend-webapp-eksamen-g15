import React, {useState, useEffect} from 'react';
import {StandardButton, RegisterAndLoginForm} from "../styles/StyledComponents"
import { useAuthContext } from "../context/AuthProvider"
import { login } from "../utils/eventService"

const LoginComp = ({setShowRegister}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const {setUser} = useAuthContext();
    const goToRegister = () => {
        setShowRegister(true)
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const { data } = await login({
            email: email,
            password: password
        });
        if (!data.success) {
            setMessage(data.message);
        }
        else{
            const user = data?.user;
            const expire = JSON.parse(window.atob(data.token.split('.')[1])).exp;
            setMessage("success registered")
            console.log(data)
            setUser({...user, expire})
        }

    }

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return(
        <RegisterAndLoginForm>
            <label htmlFor="emial">E-post</label>
            <input onChange={handleEmailChange} type="textarea" placeholder="E-post"></input>
            <label htmlFor="password">Passord</label>
            <input onChange={handlePasswordChange} type="password" placeholder="Passord"></input>
            <p>{message}</p>
            <StandardButton onClick={handleLogin}>Login</StandardButton>
            <StandardButton onClick={goToRegister}>Register</StandardButton>
        </RegisterAndLoginForm>
    )
}

export default LoginComp