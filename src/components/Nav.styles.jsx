import styled from 'styled-components';

export const Header = styled.header`
  background-color: rgba(17, 17, 17, 0.8);
  width: 100%;
  position: fixed;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  z-index: 100;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 63px;
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
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const HamburgerWrapper = styled.div`
  @media (min-width: 767px) {
    display: none;
  }
`;

export const H1 = styled.h1`
  color: #f3f4f6;
  font-weight: 700;
  letter-spacing: -1px;
`;

export const H2 = styled.h2`
  color: ${props => props.page ? "#f3f4f6" : "#6b7280"};
  font-size: 16px;
  font-weight: 400;
`;

export const Span = styled.span`
  /* background: linear-gradient(270deg, #ed4546 0%, #4180f0 50%, #ed4546 100%); */

  background: ${props => {
    switch(props.mood) {
      default:
        return "linear-gradient(270deg, #ed4546 0%, #4180f0 50%, #ed4546 100%)";
      case "euphoria":
        return "linear-gradient(270deg, #ed4546 0%, #4180f0 50%, #ed4546 100%)";
      case "drupe":
        return "linear-gradient(270deg, #F6EA41 0%, #F048C6 50%, #F6EA41 100%)";
      case "mar caribe":
        return "linear-gradient(270deg, #D9ECC7 0%, #07A3B2 50%, #D9ECC7 100%)";
      case "viking":
        return "linear-gradient(270deg, #DBD65C 0%, #5614B0 50%, #DBD65C 100%)";
      case "opa":
        return "linear-gradient(270deg, #1fddff 0%, #ff4b1f 50%, #1fddff 100%)";
      case "dusk":
        return "linear-gradient(270deg, #ffd89b 0%, #19547b 50%, #ffd89b 100%)";
    }
  }};

  /* background: -webkit-linear-gradient(to right, #ed4546 0%, #4180f0 50%, #ed4546 100%); */
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
  /* color: #f3f4f6; */
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

export const ThemeButton = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid #f3f4f6;
  border-radius: 50%;
  background: ${props => {
    switch(props.mood) {
      default:
        return "linear-gradient(270deg, #ed4546 0%, #4180f0 50%, #ed4546 100%)";
      case "euphoria":
        return "linear-gradient(270deg, #ed4546 0%, #4180f0 50%, #ed4546 100%)";
      case "drupe":
        return "linear-gradient(270deg, #F6EA41 0%, #F048C6 50%, #F6EA41 100%)";
      case "mar caribe":
        return "linear-gradient(270deg, #D9ECC7 0%, #07A3B2 50%, #D9ECC7 100%)";
      case "viking":
        return "linear-gradient(270deg, #DBD65C 0%, #5614B0 50%, #DBD65C 100%)";
      case "opa":
        return "linear-gradient(270deg, #1fddff 0%, #ff4b1f 50%, #1fddff 100%)";
      case "dusk":
        return "linear-gradient(270deg, #ffd89b 0%, #19547b 50%, #ffd89b 100%)";
    }
  }};
  cursor: pointer;
`;