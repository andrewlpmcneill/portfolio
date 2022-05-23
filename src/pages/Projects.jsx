import React from 'react';
import Layout from '../components/Layout';
import ProjectsList from '../components/projects.projectsList';
import { Main, Header, H1, Span, H3, A } from '../components/projects.styles';
import pattern from '../../static/pattern.svg';

export default function Projects() {

  return (

    <Layout
      page='projects'
    >
      <Main>
        <Header
          style={{backgroundImage: `linear-gradient(to bottom, rgba(17,17,17,0) 15%, rgba(17,17,17,1)), url(${pattern})`}}
        >
          <H1>
            Selected<br /><Span>Projects</Span>
          </H1>
          <H3>
            View them all <A href='https://github.com/andrewlpmcneill?tab=repositories' target="_blank" rel="noreferrer">on GitHub</A>
          </H3>
        </Header>
        <ProjectsList />
      </Main>
    </Layout>

  )

}
