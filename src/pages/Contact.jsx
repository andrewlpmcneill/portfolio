import React from 'react';
import Layout from '../components/Layout';

export default function Contact() {

  return (

    <Layout
      page='contact'
    >
      <main>
        <h1 className='heading'>
          Contact
        </h1>
        <p className='paragraph'>
          <a className='paragraph-link' href='andrew@andrewmc.ca'>andrew@andrewmc.ca</a>
        </p>
        <p className='paragraph'>
          <a className='paragraph-link' href='https://github.com/andrewlpmcneill'>GitHub</a>
        </p>
        <p className='paragraph'>
          <a className='paragraph-link' href='https://www.linkedin.com/in/andrewlpmcneill/'>LinkedIn</a>
        </p>
      </main>
    </Layout>

  )

}
