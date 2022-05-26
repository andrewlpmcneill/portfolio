import React, { useContext } from 'react';
import ProjectsList from './projects.ProjectsList';
import { Main, Header, H1, Span, H3, A } from './projects.styles';
import pattern from '../../static/pattern.svg';
import { MoodContext } from './Layout';

export default function ProjectsComponent() {

  const mood = useContext(MoodContext);

  return (

    <Main>
      <Header
        style={{backgroundImage: `linear-gradient(to bottom, rgba(17,17,17,0) 15%, rgba(17,17,17,1)), url(${pattern})`}}
      >
        <H1>
          Selected<br /><Span mood={mood}>Projects</Span>
        </H1>
        <H3>
          View them all <A href='https://github.com/andrewlpmcneill?tab=repositories' target="_blank" rel="noreferrer" mood={mood}>on GitHub</A>
        </H3>
      </Header>
      <ProjectsList
        mood={mood}
      />
    </Main>
  
  )

}
