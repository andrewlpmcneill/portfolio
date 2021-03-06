import React, { useContext } from 'react';
import Skills from './index.Skills';
import ReactJS from '../assets/reactjs.svg';
import Node from '../assets/nodejs.svg';
import Express from '../assets/express.svg';
import RubyOnRails from '../assets/rubyonrails.svg';
import PostgreSQL from '../assets/postgresql.svg';
import MongoDB from '../assets/mongodb.svg';
import { Main, Technologies, Technology, Introduction, H1, H2, P, Section, A } from './index.styles';
import { MoodContext } from './Layout';

export default function HomeComponent() {

  const [mood, setMood] = useContext(MoodContext);

  return (

    <Main>
      <H2>
        HIGHLIGHTED TECHNOLOGIES
      </H2>
      <Technologies>
        <Technology>
          <ReactJS height="32" width="120" viewBox="47 19 50 23" style={{marginTop: "2px"}}/>
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
          Hey, I&apos;m Andrew McNeill.
        </H1>
        <P>
          I&apos;m a full-stack web developer pivoting from seven years in sales, marketing, and operations leadership.<br />I&apos;m a&nbsp;<A href="https://www.lighthouselabs.ca/" target="_blank" rel="noreferrer">Lighthouse Labs</A>&nbsp;graduate with a focus on JavaScript, React, NodeJS, Express, PostgreSQL, Ruby, and Rails.
        </P>
      </Introduction>
      <Section>
        <Skills />
      </Section>
    </Main>
  
  )

}
