import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #171717;
  padding: 1.5rem 0 0.6rem 1.5rem;
  border-top: 1px solid #2a2a2a;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const H1 = styled.h1`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.color ? "#f3f4f6" : "#6b7280"};
  margin-top: 0;
  margin-bottom: 0;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const LinkIcon = styled.h1`
  font-size: 16px;
  padding-top: 5px;
  margin-left: 0.25rem;
`;