import React from 'react';
import { RiGatsbyFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer>
      <h1 className='footer-title'>Made by Andrew McNeill</h1>
      <div className='footer-links'>
        <a className='footer-link footer-link-gatsby' href='https://www.gatsbyjs.com/'>
          <h1 className='footer-link-title'>Gatsby <RiGatsbyFill /></h1>
        </a>
        <a className='footer-link footer-link-github' href='https://github.com/andrewlpmcneill'>
          <h1 className='footer-link-title'>Github <AiFillGithub /></h1>
        </a>
      </div>
    </footer>
  )
}
