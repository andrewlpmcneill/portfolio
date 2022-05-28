import React, { useContext } from 'react';
import { Main, Header, H1, H3, Span, Section, A, Item } from './contact.styles';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import pattern from '../../static/pattern.svg';
import { MoodContext } from './Layout';

export default function ContactComponent() {

  const mood = useContext(MoodContext);

  return (

    <Main>
      <Header
        style={{backgroundImage: `linear-gradient(to bottom, rgba(17,17,17,0) 15%, rgba(17,17,17,1)), url(${pattern})`}}
      >
        <H1>
          Cont<Span mood={mood}>act</Span><br />Me
        </H1>
        <H3>
          Reach out to collaborate!
        </H3>

      </Header>
      <Section>
        <Item
          mood={mood}
        >
          <MdEmail />&nbsp;<A href='mailto:andrew@andrewmc.ca' mood={mood}>andrew@andrewmc.ca</A>
        </Item>
        <Item
          mood={mood}
        >
          <AiFillGithub />&nbsp;<A href='https://github.com/andrewlpmcneill' target="_blank" rel="noreferrer" mood={mood}>GitHub</A>
        </Item>
        <Item
          mood={mood}
        >
          <AiFillLinkedin />&nbsp;<A href='https://www.linkedin.com/in/andrewlpmcneill/' target="_blank" rel="noreferrer" mood={mood}>LinkedIn</A>
        </Item>
      </Section>
    </Main>
  
  )

}
