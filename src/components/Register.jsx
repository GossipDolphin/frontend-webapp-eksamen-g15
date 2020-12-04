import React, { useState } from 'react';
import { StandardButton, RegisterAndLoginForm } from "../styles/StyledComponents"
import { register } from "../utils/eventService"
import { useAuthContext } from "../context/AuthProvider"

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeted, setPasswordRepeted] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const setUser = useAuthContext();

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)

    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)

    }
    const handlePasswordRepeatedChange = (e) => {
        setPasswordRepeted(e.target.value)

    }
    const registerUser = async (e) => {
        e.preventDefault();
        const { data } = await register({
            name: name,
            email: email,
            password: password
        })
        if (!data.success) {

            if (data.error.code === 11000) {
                setMessage("Epost finnes allerede")
            }
            else {
                console.log(data)
                setMessage(data.message)
            }
        }
        else {
            const user = data?.user;
            const expire = JSON.parse(window.atob(data.token.split('.')[1])).exp;
            setMessage("success registered")
            console.log(data)
            setUser({...user, expire})
        }
    }

    return (
        <RegisterAndLoginForm>
            <label htmlFor="name">Navn</label>
            <input type="textarea" value={name} onChange={handleNameChange} placeholder="Navn" required></input>
            <label htmlFor="email">E-post</label>
            <input type="textarea" value={email} onChange={handleEmailChange} placeholder="E-post" autoComplete="email" required></input>
            <label htmlFor="password">Passord</label>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Passord" autoComplete="current-password" required></input>
            <label htmlFor="password">Gjenta Passord</label>
            <input type="password" value={passwordRepeted} onChange={handlePasswordRepeatedChange} placeholder="Gjenta passord" autoComplete="current-password" required></input>
            <p>{message}</p>
            <StandardButton onClick={registerUser}>Register</StandardButton>


        </RegisterAndLoginForm>
    )
}

export default Register