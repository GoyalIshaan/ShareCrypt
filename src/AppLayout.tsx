import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
const AppLayout: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
