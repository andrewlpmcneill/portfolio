import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import './Layout.css'

export default function Layout(props) {

  const {
    children,
    title,
    page
  } = props;

  return (

    <>
      <Nav
        page={page}
      />
      <Header
        title={title}
      />
      {children} 
      <Footer />
    </>
  
  )
  
}
