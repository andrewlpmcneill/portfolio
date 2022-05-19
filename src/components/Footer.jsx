import React from 'react';
import { RiGatsbyFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';

export default function Footer() {

  return (

    <footer>
      <h1 className='title'>
        Made by Andrew McNeill
      </h1>
      <div className='links'>
        <a className='link link-gatsby' href='https://www.gatsbyjs.com/'>
          <h1 className='link-title'>
            Gatsby <RiGatsbyFill />
          </h1>
        </a>
        <a className='link link-github' href='https://github.com/andrewlpmcneill'>
          <h1 className='link-title'>
            GitHub <AiFillGithub />
          </h1>
        </a>
      </div>
    </footer>
  
  )
  
}
