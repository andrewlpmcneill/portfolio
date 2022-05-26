import styled from 'styled-components';

export const Main = styled.main`
  padding-left: 8vw;
  padding-right: 8vw;
`;

export const Project = styled.article`
  background-color: rgba(31, 33, 35, 0.69);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  margin-bottom: 2rem;
`;

export const Description = styled.div`
  padding: 0 1rem;
  width: 40%;
  position: sticky;
  top: 10vh;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const Screenshots = styled.div`
  width: 60%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  font-size: 34px;
  color: #cac5be;
  margin-top: 1rem;
`;

export const Stack = styled.h2`
  font-size: 22px;
  font-weight: 200;
  color: #cac5be;
  margin: 0 0 2rem 0;
`;

export const SubHeading = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #cac5be;
  margin-bottom: 0;
`;

export const P = styled.p`
  font-size: 16px;
  font-weight: 300;
  font-style: italic;
  color: #cac5be;
  margin-bottom: 2rem;
  margin-top: 0.4rem;
`;

export const A = styled.a`
  color: #cac5be;
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