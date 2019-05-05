import React from 'react';
import { Text } from 'rebass';
import PropTypes from 'prop-types';
import LinkAnimated from './LinkAnimated';

const RouteLink = ({ to, children, uppercase }) => (
  <LinkAnimated to={to}>
    <Text
      as="span"
      fontSize={[1, 2]}
      color="background"
      style={{ textTransform: uppercase && 'uppercase' }}
    >
      {children}
    </Text>
  </LinkAnimated>
);

RouteLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  uppercase: PropTypes.bool,
};

export default RouteLink;
