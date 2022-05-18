import React from 'react'

export default function Header() {
  return (
    <>
      <h1 className='header-title'>
        A developer who cares about detail.
      </h1>
      <div className='header-links'>
        <a className='header-link header-link-reach' href='/contact'>
          <h2 className='header-link-title'>Reach Out →</h2>
        </a>
        <a className='header-link header-link-view' href='/projects'>
          <h2 className='header-link-title'>View Projects ↓</h2>
        </a>
      </div>
    </>
  )
}
