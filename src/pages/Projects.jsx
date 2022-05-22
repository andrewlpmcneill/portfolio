import React from 'react';
import Layout from '../components/Layout';
import ProjectsList from '../components/projects.projectsList';

export default function Projects() {

  return (

    <Layout
      page='projects'
    >
      <main>
        <h1 className='header-heading'>
          Projects
        </h1>
        <h3 className='header-subheading'>
          View them all <a className='header-subheading-link' href='https://github.com/andrewlpmcneill?tab=repositories'>on GitHub</a>
        </h3>
        <ProjectsList />
      </main>
    </Layout>

  )

}
