import React, { type ReactNode } from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

export default ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}