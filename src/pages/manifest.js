import React from 'react';
import ReactHelmet from 'react-helmet';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Manifest from '../sections/Manifest';

const ManifestPage = () => (
  <Layout>
    <ReactHelmet>
      <title>DevUx | Manifest</title>
    </ReactHelmet>
    <Header />
    <Manifest />
    <Footer />
  </Layout>
);

export default ManifestPage;
