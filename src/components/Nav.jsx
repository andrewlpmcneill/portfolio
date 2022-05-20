import React from 'react';
import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Dropdown from './Nav.Dropdown';
import Hamburger from './Nav.hamburger';
import { Header, Navbar, Div, HamburgerWrapper, TitleLink, Link, LinkIcon, H1, H2, NavbarWrapper } from './Nav.styles';

export default function Nav() {

  const [open, setOpen] = useState(false);
  
  return (

    <Header>
      <NavbarWrapper>
        <Navbar>
          <TitleLink href='/'>
            <H1>
              ANDREW
            </H1>
            <H1 clr={true}>
              MC
            </H1>
          </TitleLink>
          <Div>
            <Link href='/about'>
              <H2 className='link'>
                About
              </H2>
            </Link>
            <Link href='/projects'>
              <H2 className='link'>
                Projects
              </H2>
            </Link>
            <Link href='/contact'>
              <H2 className='link'>
                Contact
              </H2>
            </Link>
            <LinkIcon href='https://github.com/andrewlpmcneill'>
              <AiFillGithub />
            </LinkIcon>
            <LinkIcon href='https://www.linkedin.com/in/andrewlpmcneill/'>
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
      />
    </Header>
  
  )

}
