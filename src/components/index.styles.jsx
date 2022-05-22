import styled from 'styled-components';

export const Main = styled.main`
  background-color: #111111;
`;

export const Technologies = styled.aside`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 48px 0 64px 0;
`;

export const Technology = styled.div`
  width: 160px;
  height: 50px;
  /* filter: contrast(); */
  filter: contrast(10%) grayscale(1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-top: 64px;
`;

export const H1 = styled.h1`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -1px;
  color: #f3f4f6;
  margin-bottom: 0;
`;

export const P = styled.p`
  font-weight: 400;
  color: #9ca3af;
  text-align: center;
  font-size: 18px;
  line-height: 28px;
  margin-top: 24px;
`;

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0 3rem 0;
`;