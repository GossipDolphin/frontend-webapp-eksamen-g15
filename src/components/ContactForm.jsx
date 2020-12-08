import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../context/AuthProvider';
import { submitForm } from '../utils/contactFormService';
import { ContactFormStyled, StandardButton } from '../styles/StyledComponents';

const ContactForm = ({ setFormSent, setLoading, loading }) => {
  const { user, isLoggedIn } = useAuthContext();
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
  const submitClicked = async (e) => {
    e.preventDefault();

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
    <ContactFormStyled onSubmit={submitClicked}>
      <label htmlFor="name">Navn</label>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        name="name"
        required
      />
      <label htmlFor="email">Epost</label>
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        name="email"
        required
      />
      <label htmlFor="subject">Subject</label>
      <input
        type="text"
        value={subject}
        onChange={handlesubjectChange}
        name="subject"
        required
      />
      <label htmlFor="message">Message</label>
      <textarea
        type="text"
        rows="4"
        cols="50"
        onChange={handleMessageChange}
        value={message}
        name="message"
        required
      />
      <StandardButton type="submit">Send</StandardButton>
      <p style={{ color: 'red' }}>{feedback}</p>
      {loading && <p>Sending...</p>}
    </ContactFormStyled>
  );
};
export default ContactForm;
