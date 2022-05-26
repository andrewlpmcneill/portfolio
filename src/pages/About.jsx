import React from 'react';
import Layout from '../components/Layout';
import AboutComponent from '../components/aboutComponent';

export default function About() {
  
  return (

    <Layout
      title={false}
      page="about"
    >
     <AboutComponent />
    </Layout>

  )

}
