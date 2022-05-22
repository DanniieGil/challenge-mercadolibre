import React, { ReactNode } from 'react';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
