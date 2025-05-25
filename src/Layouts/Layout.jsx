import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Nav />


      <main className="container-fluid my-4 px-3" style={{ minHeight: '80vh' }}>
        {children}
      </main>

      <Footer />
    </>
  );
}
