import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import './Layout.css'

export default function Layout(props) {

  const {
    children
  } = props;

  return (

    <>
      <Nav />
      <Header />
      {children} 
      <Footer />
    </>
  
  )
  
}
