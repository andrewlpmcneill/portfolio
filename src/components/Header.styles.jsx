import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111111;
  width: 100%;
  margin: 0;
`;

export const H1 = styled.h1`
  color: #f3f4f6;
  margin: 8rem 0 0 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  @media (min-width: 1024px) {
    font-size: 96px;
    line-height: 96px;
    letter-spacing: -4.2px;
  }
  @media (min-width: 640px) and (max-width: 1023px) {
    font-size: 72px;
    line-height: 72px;
    letter-spacing: -3px;
  }
  @media (max-width: 639px) {
    font-size: 60px;
    line-height: 66px;
    letter-spacing: -3px;
  }
  text-align: center;
  font-weight: 800;
`;

export const H2 = styled.h2`
  color: #9ca3af;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin-top: 1.5rem;
  margin-bottom: 0;
`;

export const Span = styled.span`
  background: ${props => {
    switch(props.mood) {
      default:
        return "-webkit-linear-gradient(0deg, #ed4546, #4180f0)";
      case "euphoria":
        return "-webkit-linear-gradient(0deg, #ed4546, #4180f0)";
      case "drupe":
        return "-webkit-linear-gradient(0deg, #F6EA41, #F048C6)";
      case "mar caribe":
        return "-webkit-linear-gradient(0deg, #D9ECC7, #07A3B2)";
      case "viking":
        return "-webkit-linear-gradient(0deg, #DBD65C, #5614B0)";
      case "opa":
        return "-webkit-linear-gradient(0deg, #1fddff, #ff4b1f)";
      case "dusk":
        return "-webkit-linear-gradient(0deg, #ffd89b, #19547b)";
    }
  }};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Links = styled.div`
  display: flex;
  @media (min-width: 640px) {
    width: 576px;
    justify-content: center;
    gap: 0.7rem;
    margin: 2rem 0 6rem 0;
  }
  @media (max-width: 639px) {
    width: 91%;
    flex-direction: column;
    align-items: center;
    margin: 5.8rem 0 5rem 0%;
    text-align: center;
    gap: 0.7rem;
  }
`;

export const Link = styled.a`
  @media (max-width: 639px) {
    width: 89%;
  }
  background-color: ${props => props.reach ? "#ffffff" : "#1d1d1d"};
  color: ${props => props.reach ? "#111111" : "#d1d5db"};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 12px 40px;
  text-decoration: none;
  border: 1px solid #374151;
  border-radius: 0.375rem;
  &:hover {
    background-color: ${props => props.reach ? "#d4d4d4": "#171717"};
  }
`;

