import styled from 'styled-components';

export const Main = styled.main`
  margin-bottom: 9rem;
`;

export const Header = styled.header`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  width: 100%;
  padding-top: 64px;
  margin-bottom: 3rem;
  `;

export const H1 = styled.h1`
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
  font-weight: 800;
  letter-spacing: -1px;
  color: #f3f4f6;
  margin-bottom: 0;
  margin-top: 4rem;
  text-align: center;
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
  padding: 0 1rem 0 1rem;
`;

export const H3 = styled.h3`
  color: #9ca3af;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin-top: 1.5rem;
  padding-bottom: 38px;
  @media (min-width: 896px) {
    width: 832px;
    text-align: center;
  }
  @media (max-width: 895px) {
    width: 92%;
    text-align: center;
  }
  border-bottom: 1px solid #2a2a2a;
`;

export const P = styled.p`
  color: #f3f4f6c9;
  font-weight: 300;
  font-size: 17px;
  text-align: center;
  @media (max-width: 730px) {
    width: 95%;
  }
`;

export const A = styled.a`
  color: #f3f4f6;
  /* text-decoration-color: #4180f0; */
  text-decoration-color: ${props => {
    switch(props.mood) {
      default:
        return "#4180f0";
      case "euphoria":
        return "#4180f0";
      case "drupe":
        return "#F048C6";
      case "mar caribe":
        return "#07A3B2";
      case "viking":
        return "#5614B0";
      case "opa":
        return "#ff4b1f";
      case "dusk":
        return "#19547b";
    }
  }};
  &:hover {
    color: ${props => {
    switch(props.mood) {
      default:
        return "#ed4546";
      case "euphoria":
        return "#ed4546";
      case "drupe":
        return "#F6EA41";
      case "mar caribe":
        return "#D9ECC7";
      case "viking":
        return "#DBD65C";
      case "opa":
        return "#1fddff";
      case "dusk":
        return "#ffd89b";
    }
  }};
  }
`;

export const Section = styled.section`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: left;
  @media (min-width: 896px) {
  width: 832px;
  }
  @media (max-width: 895px) {
    width: 92%;
  }
  margin: auto;
  margin-top: 1rem;
`;

export const H2 = styled.h2`
  font-size: 29px;
  color: #f3f4f6;
  font-weight: 600;
`;

export const Item = styled.li`
  font-size: 18px;
  font-weight: 400;
  color: #f3f4f6d2;
  line-height: 29px;
  &:before {
    content: "???";
    color: ${props => {
    switch(props.mood) {
      default:
        return "#ed4546";
      case "euphoria":
        return "#ed4546";
      case "drupe":
        return "#F6EA41";
      case "mar caribe":
        return "#D9ECC7";
      case "viking":
        return "#DBD65C";
      case "opa":
        return "#1fddff";
      case "dusk":
        return "#ffd89b";
    }
  }};
    display: inline-block;
    font-size: 24px;
    margin-right: 0.5em;
    margin-left: -1em;
  }
`;

export const Italics = styled.h3`
  font-size: 18px;
  font-style: italic;
  color: #f3f4f6d2;
  font-weight: 400;
  margin-top: 0;
`;

export const SubHeading = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #f3f4f6d2;
  line-height: 29px;
`;