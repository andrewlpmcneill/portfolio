import React from 'react'

export default function Header() {

  return (

    <header>
      <h1 className='title'>
        A developer who <br /><span className='title-coloured'>cares about detail.</span>
      </h1>
      <div className='links'>
        <a className='link link-reach' href='/contact'>
          <h2 className='link-title'>
            Reach Out →
          </h2>
        </a>
        <a className='link link-view' href='/projects'>
          <h2 className='link-title'>
            View Projects ↓
          </h2>
        </a>
      </div>
    </header>
  
  )

}
