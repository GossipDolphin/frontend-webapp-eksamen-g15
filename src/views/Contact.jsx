import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Banner from '../components/Banner';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [formSent, setFormSent] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false)
  const returnClicked = () => setRedirect(true);

  if (redirect) {
    return <Redirect push to="/Home" />;
  }

  return (
    <>
      <Banner bannerTitle="Kontakt oss" />
      {!formSent && <ContactForm setFormSent={setFormSent} setLoading={setLoading} />}
      {formSent && (
        <div>
          <h1>Form sent, you will be receiving a confirmation mail shortly</h1>
          <button type="button" onClick={returnClicked}>
            Return to home
          </button>
        </div>
      )}
      {loading && <p>Sending...</p>}
    </>
  );
};
export default Contact;
