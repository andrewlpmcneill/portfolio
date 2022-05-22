import styled from 'styled-components';

export const Main = styled.main`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-bottom: 9rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  width: 100%;
  margin-top: 64px;
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
  background: -webkit-linear-gradient(0deg, #ed4546, #4180f0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0 1rem 0 2px;
`;

export const Section = styled.section`
  text-align: center;
  margin-top: 10rem;
  margin-bottom: 45rem;
`;

export const A = styled.a`
  color: #f3f4f6;
  text-decoration-color: #4180f0;
`;

export const Item = styled.li`
  font-size: 36px;
  font-weight: 500;
  color: #f3f4f6d2;
  line-height: 48px;
  &:before {
    content: "•";
    color: #ed4546;
    display: inline-block;
    font-size: 24px;
    margin-right: 0.5em;
    margin-left: -1em;
  }
`;