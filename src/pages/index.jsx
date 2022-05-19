import React from 'react';
import Layout from '../components/Layout';
import Skills from '../components/index.Skills';
import { RiReactjsFill } from 'react-icons/ri';
import { DiNodejs } from 'react-icons/di';
import { SiRubyonrails } from 'react-icons/si';

export default function Home() {

  return (
  
    <Layout>
      <aside className='technologies'>
        <h3 className='technologies-react'>
          <RiReactjsFill /> React
        </h3>
        <h3 className='technologies-node'>
          <DiNodejs />
        </h3>
        <h3 className='technologies-express'>
          Express
        </h3>
        <h3 className='technologies-rails'>
          <SiRubyonrails />
        </h3>
        <h3 className='technologies-postgres'>
          PostgreSQL
        </h3>
        <h3 className='technologies-mongo'>
          MongoDB
        </h3>
      </aside>
      <header className='introduction'>
        <h1 className='introduction-heading'>
          Based in Halifax, Nova Scotia
        </h1>
        <p className='introduction-paragraph'>
          I spend my free time cycling, sailing, and having fun with microcontrollers.
        </p>
      </header>
      <section className='skills'>
        <Skills />
      </section>
    </Layout>
  
  )
  
}
