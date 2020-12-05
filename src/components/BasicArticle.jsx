import React, { useState } from 'react';
import { Redirect } from 'react-router';

const BasicArticle = ({ title, url }) => {
  const [redirect, setRedirect] = useState(false);
  const handleOnclickNavigation = () => {
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect push to={url} />;
  }
  return (
    <section onClick={handleOnclickNavigation}>
      <h1>{title}</h1>
    </section>
  );
};
export default BasicArticle;
