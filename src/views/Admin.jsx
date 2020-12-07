import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import AdminPanel from '../components/AdminPanel';



const Admin = () => {
  return (
    <>
      <Banner bannerTitle="Admin Panel" />
      <AdminPanel  />
    </>
  );
};

export default Admin;
