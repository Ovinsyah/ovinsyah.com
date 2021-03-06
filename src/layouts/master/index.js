import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default ({children}) => {
  return (
    <React.Fragment>
      <Navbar />
        {children}
      <Footer />
    </React.Fragment>
  )
}
