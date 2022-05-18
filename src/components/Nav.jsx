import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Nav() {
  return (
    <nav>
      <a className='nav-title-link' href='/'>
        <h1 className='nav-title'>ANDREWM</h1><h1 className='nav-title-coloured'>C</h1>
      </a>
      <div className='nav-links'>
        <a className='nav-link nav-link-about' href='/about'>
          <h2 className='nav-link'>About</h2>
        </a>
        <a className='nav-link nav-link-projects' href='/projects'>
          <h2 className='nav-link'>Projects</h2>
        </a>
        <a className='nav-link nav-link-contact' href='/contact'>
          <h2 className='nav-link'>Contact</h2>
        </a>
        <a className='nav-link-icon nav-link-icon-gh' href='https://github.com/andrewlpmcneill'>
          <AiFillGithub />
        </a>
        <a className='nav-link-icon nav-link-icon-li' href='https://www.linkedin.com/in/andrewlpmcneill/'>
          <AiFillLinkedin />
        </a>
      </div>
    </nav>
  )
}
