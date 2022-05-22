import React from 'react';
import Layout from '../components/Layout';
import Skills from '../components/index.Skills';
import ReactJS from '../assets/reactjs.svg';
import Node from '../assets/nodejs.svg';
import Express from '../assets/express.svg';
import RubyOnRails from '../assets/rubyonrails.svg';
import PostgreSQL from '../assets/postgresql.svg';
import MongoDB from '../assets/mongodb.svg';
import { Main, Technologies, Technology, Introduction, H1, P, Section } from '../components/index.styles';

export default function Home() {

  return (
  
    <Layout>
      <Main>
        <Technologies>
          <Technology>
            <ReactJS height="32" width="120" viewBox="47 19 50 23"/>
          </Technology>
          <Technology>
            <Node height="32" width="120" viewBox="55 12 10 35" />
          </Technology>
          <Technology>
            <Express height="32" width="125" viewBox="35 12 50 29" style={{marginTop: "8px"}}/>
          </Technology>
          <Technology>
            <RubyOnRails height="32" width="100"/>
          </Technology>
          <Technology>
            <PostgreSQL height="32" width="160" viewBox="110 -5 100 60" style={{marginTop: "3px"}}/>
          </Technology>
          <Technology>
            <MongoDB height="32" width="140" viewBox="43 19 50 23" style={{marginTop: "5px"}}/>
          </Technology>
        </Technologies>
        <Introduction>
          <H1>
            Hey, I&apos;m Andrew.
          </H1>
          <P>
            I&apos;m a full-stack web developer pivoting from seven years in sales, marketing, and operations leadership.<br />Recent Lighthouse Labs graduate with a focus on JavaScript, React, NodeJS, Express, PostgreSQL, Ruby and Rails.
          </P>
        </Introduction>
        <Section>
          <Skills />
        </Section>
      </Main>
    </Layout>
  
  )
  
}
