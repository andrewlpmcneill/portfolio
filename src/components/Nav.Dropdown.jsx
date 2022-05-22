import React from 'react';
import './Nav.Dropdown.css'

export default function Dropdown(props) {

  const {
    open,
    page
  } = props;

  return (

    <section
      className="p-menu1"
    >
      <nav
        className="navigation"
        role="navigation"
      >
        <nav
          className={open ? "menu1 open" : "menu1"}
        >
          <a
            className="dropdown-link dropdown-link1"
            href="/about"
            style={page === 'about' ? {color: "white", fontWeight: 700} : null}
          >
            <p className='dropdown-link-text dropdown-link-text1'>About</p>
          </a>
          <a
            className="dropdown-link dropdown-link2"
            href="/projects"
            style={page === 'projects' ? {color: "white", fontWeight: 700} : null}
          >
            <p className='dropdown-link-text dropdown-link-text2'>Projects</p>
          </a>
          <a
            className="dropdown-link dropdown-link3"
            href="/contact"
            style={page === 'contact' ? {color: "white", fontWeight: 700} : null}
          >
            <p className='dropdown-link-text dropdown-link-text2'>Contact</p>
          </a>
        </nav>
      </nav>
    </section>
  
  )

}
