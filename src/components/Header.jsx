import React from 'react';
import { StyledHeader, H1, H2, Span, Links, Link } from './Header.styles';
import pattern from '../../static/pattern.svg';

export default function Header(props) {

  const {
    title
  } = props;

  return (

    <StyledHeader
      // style={{backgroundImage: `url(${pattern})`}}
      style={{backgroundImage: `linear-gradient(to bottom, rgba(17,17,17,0) 15%, rgba(17,17,17,1)), url(${pattern})`}}
    >
      {title &&
      <>
        <H1>
          A developer who <br /><Span>cares about detail.</Span>
        </H1>
        <H2>
          Full-stack web developer based in Halifax, Nova Scotia, Canada.
        </H2>
        <Links >
          <Link
            href='/contact'
            reach={true}
          >
            Reach Out →
          </Link>
          <Link
            href='/projects'
            reach={false}
          >
            View Projects ↓
          </Link>
        </Links>
      </>}
    </StyledHeader>
  
  )

}
