import React from 'react';
import {StandardButton, RegisterAndLoginForm} from "../styles/StyledComponents"

const Login = () => {

    return(
        <RegisterAndLoginForm>
            <label htmlFor="emial">E-post</label>
            <input type="textarea" placeholder="E-post"></input>
            <label htmlFor="password">Passord</label>
            <input type="password" placeholder="Passord"></input>
            <StandardButton>Login</StandardButton>
        </RegisterAndLoginForm>
    )
}

export default Login