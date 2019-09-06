import React from 'react';
import PropTypes from 'prop-types';
import LinkAnimated from './LinkAnimated';

const RouteLink = ({ selected, to, children }) => (
  <LinkAnimated selected={selected} to={to}>
    {children}
  </LinkAnimated>
);

RouteLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
};

export default RouteLink;
