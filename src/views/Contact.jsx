import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Banner from '../components/Banner';
import ContactForm from '../components/ContactForm';
import { StandardButton, ConfirmSection } from '../styles/StyledComponents';

const Contact = () => {
  const [formSent, setFormSent] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const returnClicked = () => setRedirect(true);

  if (redirect) {
    return <Redirect push to="/Home" />;
  }

  return (
    <>
      <Banner bannerTitle="Kontakt oss" />
      {!formSent && (
        <ContactForm
          setFormSent={setFormSent}
          setLoading={setLoading}
          loading={loading}
        />
      )}
      {formSent && (
        <ConfirmSection>
          <h1>Form sent, you will be receiving a confirmation mail shortly</h1>
          <StandardButton type="button" onClick={returnClicked}>
            Return to home
          </StandardButton>
        </ConfirmSection>
      )}
    </>
  );
};
export default Contact;
