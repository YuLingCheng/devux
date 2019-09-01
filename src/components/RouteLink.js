import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './Typography';
import LinkAnimated from './LinkAnimated';

const RouteLink = ({ selected, to, children, uppercase }) => (
  <LinkAnimated selected={selected} to={to}>
    <Text
      as="span"
      fontSize={[1, 2]}
      color="primaryText"
      style={{ textTransform: uppercase && 'uppercase' }}
    >
      {children}
    </Text>
  </LinkAnimated>
);

RouteLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  uppercase: PropTypes.bool,
};

export default RouteLink;
