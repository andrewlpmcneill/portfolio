import React from 'react';
import HomeComponent from '../components/homeComponent';
import Layout from '../components/Layout';

export default function Home() {

  return (
  
    <Layout
      title={true}
      page="home"
    >
      <HomeComponent />
    </Layout>
  
  )
  
}
