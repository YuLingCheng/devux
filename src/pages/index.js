import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Ideas from '../sections/Ideas';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <Ideas />
    <About />
    <Footer />
  </Layout>
);

export default IndexPage;
