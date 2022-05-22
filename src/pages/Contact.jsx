import React from 'react';
import Layout from '../components/Layout';
import { Main, Header, H1, Span, Section, A, Item } from '../components/contact.styles';
import pattern from '../../static/pattern.svg';

export default function Contact() {

  return (

    <Layout
      page='contact'
    >
      <Main>
        <Header
          style={{backgroundImage: `linear-gradient(to bottom, rgba(17,17,17,0) 15%, rgba(17,17,17,1)), url(${pattern})`}}
        >
          <H1>
            Cont<Span>act</Span><br />Me
          </H1>

        </Header>
        <Section>
          <ul
              style={{listStyle: "none", paddingLeft: "0"}}
            >
            <Item>
              <A href='andrew@andrewmc.ca'>andrew@andrewmc.ca</A>
            </Item>
          </ul>
          <ul
              style={{listStyle: "none", paddingLeft: "0"}}
            >
            <Item>
              <A href='https://github.com/andrewlpmcneill' target="_blank" rel="noreferrer">GitHub</A>
            </Item>
          </ul>
          <ul
              style={{listStyle: "none", paddingLeft: "0"}}
            >
            <Item>
              <A href='https://www.linkedin.com/in/andrewlpmcneill/' target="_blank" rel="noreferrer">LinkedIn</A>
            </Item>
          </ul>
        </Section>
      </Main>
    </Layout>

  )

}
