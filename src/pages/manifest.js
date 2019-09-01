import PropTypes from 'prop-types';
import React from 'react';
import ReactHelmet from 'react-helmet';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Manifest from '../sections/Manifest';

const ManifestPage = ({ location }) => (
  <Layout>
    <ReactHelmet>
      <title>DevUx | Manifest</title>
    </ReactHelmet>
    <Header currentPath={location.pathname} />
    <Manifest />
    <Footer />
  </Layout>
);

ManifestPage.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }),
};

export default ManifestPage;
