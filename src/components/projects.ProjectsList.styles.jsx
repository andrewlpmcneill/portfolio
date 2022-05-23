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
`;

export const Heading = styled.h1`
  font-size: 34px;
  color: #cac5be;
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
  text-decoration-color: #4180f0;
`;