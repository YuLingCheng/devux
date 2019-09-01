import React from 'react';
import { Box } from 'rebass';
import PropTypes from 'prop-types';
import LinkAnimated from './LinkAnimated';

const AnchorLink = ({ onClick, selected, children, uppercase }) => (
  <Box ml={[2, 3]} color="primaryText" fontSize={[1, 2]}>
    <LinkAnimated
      as="a"
      uppercase={uppercase}
      onClick={onClick}
      selected={selected}
    >
      {children}
    </LinkAnimated>
  </Box>
);

AnchorLink.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  children: PropTypes.node,
  uppercase: PropTypes.bool,
};

export default AnchorLink;
