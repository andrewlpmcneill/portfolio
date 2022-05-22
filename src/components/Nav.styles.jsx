import styled from 'styled-components';

export const Header = styled.header`
  background-color: #111111;
  width: 100%;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 64px;
  margin: auto;
  @media (min-width: 1440px) {
    width: 1392px;
  }
  @media (min-width: 600px) and (max-width: 1439px) {
    width: 94%;
  }
  @media (max-width: 599px) {
    width: 94%;
  }
  font-family: system-ui;
`;

export const NavbarWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #2a2a2a;
`

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const HamburgerWrapper = styled.div`
  @media (min-width: 767px) {
    display: none;
  }
`

export const H1 = styled.h1`
  color: #f3f4f6;
  font-weight: 700;
  letter-spacing: -1px;
`;

export const H2 = styled.h2`
  color: #6b7280;
  font-size: 16px;
  font-weight: 400;
`;

export const Span = styled.span`
  background: linear-gradient(270deg, #ed4546 0%, #4180f0 50%, #ed4546 100%);
  background: -webkit-linear-gradient(to right, #ed4546 0%, #4180f0 50%, #ed4546 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: shine 5s linear infinite;
  animation-direction: reverse;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`;

export const TitleLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Link = styled.a`
  text-decoration: none;
  @media (max-width: 766px) {
    display: none;
  }
`;

export const LinkIcon = styled.a`
  color: #f3f4f6;
  font-size: 24px;
  padding-top: 5px;
`;