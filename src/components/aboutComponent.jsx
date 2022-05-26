import React, { useContext } from 'react';
import { Main, Header, H1, H2, Span, H3, P, A, Section, Item, Italics, SubHeading } from './about.styles';
import pattern from '../../static/pattern.svg';
import { MoodContext } from './Layout';


export default function AboutComponent() {

  const mood = useContext(MoodContext);

  return (

    <Main>
      <Header
        style={{backgroundImage: `linear-gradient(to bottom, rgba(17,17,17,0) 15%, rgba(17,17,17,1)), url(${pattern})`}}
      >
        <H1>
          About<br /><Span mood={mood}>Me</Span>
        </H1>
        <H3>
          Web developer &amp; serial tinkerer
        </H3>
        <P>
          Hey, I&apos;m Andrew! I&apos;m a full-stack web developer based out of Halifax, Nova Scotia, Canada.<br /><br />Check out the <A href='/projects' mood={mood}>projects</A> page to see highlights of what I&apos;ve made.
        </P>
      </Header>
      <Section>
        <H2>
          Projects I&apos;m working on
        </H2>
        <Italics>
          Updated May 22, 2022
        </Italics>
        <ul
          style={{listStyle: "none"}}
        >
          <Item
            mood={mood}
          >
            a React Native mobile app for drywallers/tapers to expedite board counts and estimates
          </Item>
          <Item
            mood={mood}
          >
            chipping away at a <A href='https://www.amazon.ca/hz/wishlist/ls/21C3EZ68LHXV8/ref=nav_wishlist_lists_1' target="_blank" rel="noreferrer" mood={mood}>CS fundamentals reading list</A> <br />(currently: <A href='https://www.amazon.ca/Structure-Interpretation-Computer-Programs-JavaScript/dp/0262543230/ref=sr_1_3?keywords=structure+and+interpretation+of+computer+programs&qid=1653258342&sprefix=structure+and+in%2Caps%2C78&sr=8-3' target="_blank" rel="noreferrer" mood={mood}>Structure and Interpretation of Computer Programs</A>)
          </Item>
        </ul>
      </Section>
      <Section>
        <H2>
          Connect
        </H2>
        <SubHeading>
          You can always contact me at <A href='andrew@andrewmc.ca' mood={mood}>andrew@andrewmc.ca</A> to say hello &#8212; I love meeting new people!
        </SubHeading>
        <ul
          style={{listStyle: "none"}}
        >
          <Item
            mood={mood}
          >
            <A href='https://github.com/andrewlpmcneill' target="_blank" rel="noreferrer" mood={mood}>GitHub</A>
          </Item>
          <Item
            mood={mood}
          >
            <A href='https://www.linkedin.com/in/andrewlpmcneill/' target="_blank" rel="noreferrer" mood={mood}>LinkedIn</A>
          </Item>
          <Item
            mood={mood}
          >
            <A href='https://www.strava.com/athletes/5026433' target="_blank" rel="noreferrer" mood={mood}>Strava</A>
          </Item>
        </ul>
      </Section>
      <Section>
        <H2>
          Tools
        </H2>
        <SubHeading
          style={{fontWeight: "700", fontSize: "20px", marginBottom: "0"}}
        >
          Software
        </SubHeading>
        <ul
          style={{listStyle: "none"}}
        >
          <Item
            mood={mood}
          >
            This website is hosted on <A href='https://www.rochen.com/' target="_blank" rel="noreferrer" mood={mood}>Rochen</A> and uses the <A href='https://www.gatsbyjs.com/' target="_blank" rel="noreferrer" mood={mood}>Gatsby</A> framework
          </Item>
          <Item
            mood={mood}
          >
            <strong>Editor:</strong>&nbsp;<A href='https://code.visualstudio.com/' target="_blank" rel="noreferrer" mood={mood}>Visual Studio Code</A> with <A href='https://marketplace.visualstudio.com/items?itemName=hugolcouto.dark-mint-vscode-theme' target="_blank" rel="noreferrer" mood={mood}>Dark Mint Theme</A>
          </Item>
          <Item
            mood={mood}
          >
            <strong>Terminal:</strong>&nbsp;<A href='https://iterm2.com/' target="_blank" rel="noreferrer" mood={mood}>iTerm2</A>
          </Item>
        </ul>
        <SubHeading
          style={{fontWeight: "700", fontSize: "20px", marginBottom: "0"}}
        >
          Hardware
        </SubHeading>
        <ul
          style={{listStyle: "none"}}
        >
          <Item
            mood={mood}
          >
            <strong>Coding PC:</strong>&nbsp;M1 MacBook Air
          </Item>
        </ul>
      </Section>
      <Section>
        <H2>
          Misc
        </H2>
        <ul
          style={{listStyle: "none"}}         
        >
          <Item
            mood={mood}
          >
            <A href='https://resume.creddle.io/resume/gfxjxtbqbf0' target="_blank" rel="noreferrer" mood={mood}>Resume</A>
          </Item>
        </ul>
      </Section>
    </Main>
  
  )

}
