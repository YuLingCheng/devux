import React from 'react';
import PropTypes from 'prop-types';
import LinkAnimated from './LinkAnimated';

const AnchorLink = ({ onClick, selected, children }) => (
  <LinkAnimated as="a" onClick={onClick} selected={selected}>
    {children}
  </LinkAnimated>
);

AnchorLink.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  children: PropTypes.node,
};

export default AnchorLink;
