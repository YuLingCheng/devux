import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Toolbox from '../sections/Toolbox';

const ToolboxPage = ({ location }) => (
  <Layout>
    <Header currentPath={location.pathname} />
    <Toolbox />
    <Footer />
  </Layout>
);

ToolboxPage.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }),
};
export default ToolboxPage;
