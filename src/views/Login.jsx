import React from 'react';
import {RegisterAndLoginWrapperSection} from "../styles/StyledComponents";
import Register from "../components/Register";

const Login = () => {
    return(
        <RegisterAndLoginWrapperSection>
            <Register></Register>
        </RegisterAndLoginWrapperSection>
    )
}

export default Login;