import React from 'react';
import { RiGatsbyFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';
import { StyledFooter, H1, Links, Link, LinkIcon, Title } from './Footer.styles';

export default function Footer() {

  return (

    <StyledFooter>
      <Title>
        <H1>
          Made by
        </H1>
        <H1
          color={true}
        >
          Andrew McNeill
        </H1>
        <H1>
          using
        </H1>
        <H1
          color={true}
        >
          Gatsby
        </H1>
      </Title>
      <Links>
        <Link
          href='https://www.gatsbyjs.com/'
        >
          <H1>
            Gatsby <LinkIcon><RiGatsbyFill /></LinkIcon>
          </H1>
        </Link>
        <Link
          href='https://github.com/andrewlpmcneill/portfolio'
        >
          <H1>
            GitHub <LinkIcon><AiFillGithub /></LinkIcon>
          </H1>
        </Link>
      </Links>
    </StyledFooter>
  
  )
  
}
