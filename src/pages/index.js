import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Header from '../components/Header';
import Contact from '../sections/Contact';
import Ideas from '../sections/Ideas';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <Ideas />
    <About />
    <Contact />
  </Layout>
);

export default IndexPage;
