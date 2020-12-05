import React, { useState } from 'react';
import { RegisterAndLoginWrapperSection } from '../styles/StyledComponents';
import Register from '../components/Register';
import LoginComp from '../components/Login';

const Login = () => {
  const [ShowRegister, setShowRegister] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <RegisterAndLoginWrapperSection>
      {ShowRegister ? (
        <Register
          setShowRegister={setShowRegister}
          setSuccess={setSuccess}
          success={success}
        />
      ) : (
        <LoginComp
          setShowRegister={setShowRegister}
          setSuccess={setSuccess}
          success={success}
        />
      )}
    </RegisterAndLoginWrapperSection>
  );
};

export default Login;
