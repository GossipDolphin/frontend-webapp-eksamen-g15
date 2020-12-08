import React, { useState, useEffect } from 'react';
import { listForms, deleteForm } from '../utils/contactFormService';
import {
  ContactCard,
  ContactCardWrapper,
  StandardButton,
} from '../styles/StyledComponents';

const AdminPanel = () => {
  const [contactForms, setContactForms] = useState(null);

  // method for getting forms
  const getForms = async () => {
    const { data } = await listForms();
    if (data.success) {
      if (data.data.length < 1) {
        setContactForms(null);
      } else {
        setContactForms(data.data);
      }
    }
  };

  const removeForm = async (e) => {
    const { data } = await deleteForm(e.target.value);
    if (data.error) {
      console.log(data);
    }
    getForms();
  };

  useEffect(() => {
    getForms();
  }, []);

  return (
    <ContactCardWrapper>
      {contactForms &&
        contactForms.map((form, index) => (
          <ContactCard key={index}>
            <h4>
              Name:
              <br /> {form.name}
            </h4>
            <h4>
              Email:
              <a href={`mailto: ${form.email}`}> {form.email}</a>
            </h4>
            <h4>
              Subject:
              <p>{form.subject}</p>
            </h4>
            <h4>
              Message:
              <p> {form.message}</p>
            </h4>
            <StandardButton type="button" value={form._id} onClick={removeForm}>
              Delete
            </StandardButton>
          </ContactCard>
        ))}
      {!contactForms && <h1 style={{ margin: ' 0 auto' }}>No contact forms</h1>}
    </ContactCardWrapper>
  );
};

export default AdminPanel;
