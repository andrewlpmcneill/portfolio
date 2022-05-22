import React from 'react';
import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Dropdown from './Nav.Dropdown';
import Hamburger from './Nav.hamburger';
import { Header, Navbar, Div, HamburgerWrapper, TitleLink, Link, LinkIcon, H1, H2, Span, NavbarWrapper } from './Nav.styles';

export default function Nav(props) {

  const {
    page
  } = props;

  const [open, setOpen] = useState(false);
  
  return (

    <Header>
      <NavbarWrapper>
        <Navbar>
          <TitleLink
            href='/'
          >
            <H1>
              andrew
            </H1>
            <H1>
              <Span>
                mc
              </Span>
            </H1>
          </TitleLink>
          <Div>
            <Link
              href='/about'
            >
              <H2
                page={page === 'about' ? true : false}
              >
                About
              </H2>
            </Link>
            <Link
              href='/projects'
            >
              <H2
                page={page === 'projects' ? true : false}
              >
                Projects
              </H2>
            </Link>
            <Link
              href='/contact'
            >
              <H2
                page={page === 'contact' ? true : false}
              >
                Contact
              </H2>
            </Link>
            <LinkIcon
              href='https://github.com/andrewlpmcneill'
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </LinkIcon>
            <LinkIcon
              href='https://www.linkedin.com/in/andrewlpmcneill/'
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </LinkIcon>
            <HamburgerWrapper>
              <Hamburger
                open={open}
                setOpen={setOpen}
              />
            </HamburgerWrapper>
          </Div>
        </Navbar>
      </NavbarWrapper>
      <Dropdown
        open={open}
        page={page}
      />
    </Header>
  
  )

}
