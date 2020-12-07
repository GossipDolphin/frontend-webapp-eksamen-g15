import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { useAuthContext } from '../context/AuthProvider';
import { submitForm } from '../utils/contactFormService';

const ContactForm = ({ setFormSent, setLoading }) => {
  const { user, isLoggedIn, isAdmin } = useAuthContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  // handeling name input
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // handeling email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // handeling subject input
  const handlesubjectChange = (e) => {
    setSubject(e.target.value);
  };

  // handeling message input
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // submitting form, checking fields and email form
  const submitClicked = async () => {
    if (name !== '' && email !== '' && subject !== '' && message !== '') {
      if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        setFeedback('Email has to be real');
      } else {
        // posting form
        setLoading(true);
        const { data } = await submitForm({
          name,
          email,
          subject,
          message,
        });
        // if not posted, settign feedpack
        if (data.success) {
          setLoading(false);
          setFormSent(true);
        } else {
          setFeedback(data.message);
          setLoading(false);
        }
      }
    } else {
      setFeedback('Fill in all fields');
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      setName(user.name);
      setEmail(user.email);
    }
    return () => {
      setName('');
      setEmail('');
    };
  }, [user]);
  return (
    <>
      <label htmlFor="name">Navn</label>
      <input
        type="textarea"
        value={name}
        onChange={handleNameChange}
        name="name"
      />
      <label htmlFor="email">Epost</label>
      <input
        type="textarea"
        value={email}
        onChange={handleEmailChange}
        name="email"
      />
      <label htmlFor="subject">Subject</label>
      <input
        type="textarea"
        value={subject}
        onChange={handlesubjectChange}
        name="subject"
      />
      <label htmlFor="message">Message</label>
      <input
        type="textbox"
        onChange={handleMessageChange}
        value={message}
        name="message"
      />
      <button type="button" onClick={submitClicked}>
        Send
      </button>
      <p style={{ color: 'red' }}>{feedback}</p>
    </>
  );
};
export default ContactForm;
