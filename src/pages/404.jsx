import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Error() {

  return (

    <>
      {/* <Nav /> */}
      <header>
        <h1 className='title'>
          Oops! Looks like <br /><span className='title-coloured'>you&apos;ve taken a wrong turn.</span>
        </h1>
        <div className='links'>
          <a className='link link-home' href='/'>
            <h2 className='link-title'>
              Home ←
            </h2>
          </a>
        </div>
    </header>
      <Footer />
    </>
  
  )

}
