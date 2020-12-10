/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  StandardButton,
  RegisterAndLoginForm,
} from '../styles/StyledComponents';
import { register } from '../utils/userService';
import { useAuthContext } from '../context/AuthProvider';

const Register = ({ setShowRegister, setSuccess, success }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeted, setPasswordRepeted] = useState('');
  const [message, setMessage] = useState('');
  const { setUser } = useAuthContext();
  const [redirect, setRedirect] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordRepeatedChange = (e) => {
    setPasswordRepeted(e.target.value);
  };

  const goToLogin = () => {
    setShowRegister(false);
  };

  const handleOnclickNavigation = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect push to="/Home" />;
  }

  const registerUser = async (e) => {
    e.preventDefault();
    if (password === passwordRepeted) {
      const { data } = await register({
        name,
        email,
        password,
      });
      if (!data.success) {
        setMessage(data.message);
      } else {
        const user = data?.user;
        const expire = JSON.parse(window.atob(data.token.split('.')[1])).exp;
        setMessage('success registered');
        setUser({ ...user, expire });
        setSuccess(true);
      }
    } else {
      setMessage('passord må være like');
    }
  };

  return (
    <RegisterAndLoginForm onSubmit={registerUser}>
      {!success ? (
        <>
          <label htmlFor="name">Navn</label>
          <input
            type="textarea"
            value={name}
            onChange={handleNameChange}
            placeholder="Navn"
            required
          />
          <label htmlFor="email">E-post</label>
          <input
            type="textarea"
            value={email}
            onChange={handleEmailChange}
            placeholder="E-post"
            autoComplete="email"
            required
          />
          <label htmlFor="password">Passord</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Passord"
            autoComplete="new-password"
            required
          />
          <label htmlFor="password">Gjenta Passord</label>
          <input
            type="password"
            value={passwordRepeted}
            onChange={handlePasswordRepeatedChange}
            placeholder="Gjenta passord"
            autoComplete="new-password"
            required
          />
          <h4>{message}</h4>
          <StandardButton type="submit">Register</StandardButton>
          <p onClick={goToLogin}>login</p>
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

export default Register;
