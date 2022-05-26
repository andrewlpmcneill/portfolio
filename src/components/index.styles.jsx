import styled from 'styled-components';

export const Main = styled.main`
  background-color: #111111;
`;

export const Technologies = styled.aside`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0 0 64px 0;
  margin-top: 6px;
`;

export const Technology = styled.div`
  width: 160px;
  height: 50px;
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
  @media (min-width: 825px) and (max-width:1248px) {
    width: 816px;
    margin: auto;
    margin-top: 64px;
  }
  @media (max-width: 824px) {
    width: 320px;
    margin: auto;
    margin-top: 64px;
  }
`;

export const H1 = styled.h1`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -1px;
  color: #f3f4f6;
  margin-bottom: 0;
  @media (max-width: 824px) {
    text-align: center;
  }
`;

export const H2 = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #6b7280;
  text-align: center;
  margin: 0;
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
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 9rem;
  @media (min-width: 1440px) {
    width: 1392px;
  }
`;

export const A = styled.a`
  /* text-decoration: none; */
  color: #9ca3af;
`;