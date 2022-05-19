import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Nav() {
  
  return (

    <nav>
      <a className='title-link' href='/'>
        <h1 className='title'>
          ANDREWM
        </h1>
        <h1 className='title-coloured'>
          C
        </h1>
      </a>
      <div className='links'>
        <a className='link link-about' href='/about'>
          <h2 className='link'>
            About
          </h2>
        </a>
        <a className='link link-projects' href='/projects'>
          <h2 className='link'>
            Projects
          </h2>
        </a>
        <a className='link link-contact' href='/contact'>
          <h2 className='link'>
            Contact
          </h2>
        </a>
        <a className='link-icon link-icon-gh' href='https://github.com/andrewlpmcneill'>
          <AiFillGithub />
        </a>
        <a className='link-icon link-icon-li' href='https://www.linkedin.com/in/andrewlpmcneill/'>
          <AiFillLinkedin />
        </a>
      </div>
    </nav>
  
  )

}
