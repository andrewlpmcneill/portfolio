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
  padding: 0 0 0 0;
`;

export const H3 = styled.h3`
  color: #9ca3af;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1px;
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

export const A = styled.a`
  color: #f3f4f6;
  text-decoration-color: #4180f0;
`;