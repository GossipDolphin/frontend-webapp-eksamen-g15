import React, { useState } from 'react';
import { RegisterAndLoginWrapperSection } from "../styles/StyledComponents";
import Register from "../components/Register";
import LoginComp from "../components/Login";

const Login = () => {
    const [ShowRegister, setShowRegister] = useState(false);
    return (
        <RegisterAndLoginWrapperSection>
            {ShowRegister ?
                <Register></Register> :
                <LoginComp setShowRegister={setShowRegister}></LoginComp>
            }
        </RegisterAndLoginWrapperSection>
    )
}

export default Login;