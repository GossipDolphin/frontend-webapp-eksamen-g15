import React, { useState } from 'react';
import { Redirect } from 'react-router';
import {
  StandardButton,
  RegisterAndLoginForm,
} from '../styles/StyledComponents';
import { useAuthContext } from '../context/AuthProvider';
import { login } from '../utils/userService';

const LoginComp = ({ setShowRegister, setSuccess, success }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { setUser } = useAuthContext();
  const [redirect, setRedirect] = useState(false);

  const goToRegister = () => {
    setShowRegister(true);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data } = await login({
      email,
      password,
    });
    if (!data.success) {
      setMessage(data.message);
    } else {
      const user = data?.user;
      const expire = JSON.parse(window.atob(data.token.split('.')[1])).exp;
      setMessage('success LoggedInn');
      console.log(data);
      setUser({ ...user, expire });
      setSuccess(true);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOnclickNavigation = () => {
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect push to="/Home" />;
  }

  return (
    <RegisterAndLoginForm onSubmit={handleLogin}>
      {!success ? (
        <>
          <label htmlFor="emial">E-post</label>
          <input
            onChange={handleEmailChange}
            type="textarea"
            placeholder="E-post"
            autoComplete="email"
            required
          />
          <label htmlFor="password">Passord</label>
          <input
            onChange={handlePasswordChange}
            type="password"
            placeholder="Passord"
            autoComplete="current-password"
            required
          />
          <h5>{message}</h5>
          <StandardButton type="submit">Login</StandardButton>
          <p onClick={goToRegister}>Register</p>
        </>
      ) : (
        <>
          <h3>{message}</h3>
          <StandardButton onClick={handleOnclickNavigation}>Ok</StandardButton>
        </>
      )}
    </RegisterAndLoginForm>
  );
};

export default LoginComp;
