import React from 'react';
import './Nav.Hamburger.styles.css';

export default function Hamburger(props) {

  const {
    open,
    setOpen
  } = props;

  return (

    <>
      <div
        id="hamburger"
        className={open ? 'open' : ''}
        onClick={() => open ? setOpen(false) : setOpen(true)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  
  )

}
