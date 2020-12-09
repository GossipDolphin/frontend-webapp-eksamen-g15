import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const BasicArticle = ({ title, url }) => {
  const [redirect, setRedirect] = useState(false);
  const handleOnclickNavigation = () => {
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect push to={url} />;
  }
  return (
    <section
      role="button"
      tabIndex={0}
      onKeyPress={handleOnclickNavigation}
      onClick={handleOnclickNavigation}
    >
      <h1>{title}</h1>
    </section>
  );
};
export default BasicArticle;
