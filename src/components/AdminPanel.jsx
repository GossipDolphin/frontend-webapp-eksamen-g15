import React, { useState, useEffect } from 'react';
import { listForms, deleteForm } from '../utils/contactFormService';
import { AdminTable, ContactCard } from '../styles/StyledComponents';

const AdminPanel = (props) => {
  const [contactForms, setContactForms] = useState(null);

  // method for getting forms
  const getForms = async () => {
    const { data } = await listForms();
    console.log(data);
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
    <ContactCard>
      {contactForms &&
        contactForms.map((form) => (
          <>
            <h4>Name: {form.name}</h4>
            <h4>Email: {form.email}</h4>
            <h4>Subject: {form.subject}</h4>
            <p><b>Message:</b> {form.message}</p>
            <button type="button" value={form._id} onClick={removeForm}>
              Delete
            </button>
          </>
        ))}
      {!contactForms && <h1 style={{ margin: ' 0 auto' }}>No contact forms</h1>}
    </ContactCard>
  );
};

export default AdminPanel;
