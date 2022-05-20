import React from 'react';
import { StyledHeader, H1, Span, Links, Link } from './Header.styles';

export default function Header() {

  return (

    <StyledHeader>
      <H1>
        A developer who <br /><Span>cares about detail.</Span>
      </H1>
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
    </StyledHeader>
  
  )

}
