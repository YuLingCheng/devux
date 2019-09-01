import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Flex, Link } from 'rebass';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from './Typography';

export const IconLink = styled(Link)`
  cursor: pointer;
  transition: color 0.5s;
  color: ${props => {
    if (props.large) {
      return props.theme.colors.primaryText;
    }
    if (props.negativeColor) {
      return props.theme.colors.background;
    }
    return props.theme.colors.primary;
  }};

  &:hover {
    color: ${props => {
      if (props.ux) {
        return props.theme.colors.secondary;
      }
      return props.theme.colors.primary;
    }};
  }
`;

const Profile = styled.img`
  width: ${props => (props.large ? '120px' : '40px')};
  border-radius: 50%;
  border: ${props => (props.large ? '5px' : '2px')} solid
    ${props => props.theme.colors.background};
  margin-right: 20px;
`;

const SocialLink = ({
  fontAwesomeIcon,
  name,
  negativeColor,
  url,
  photo,
  large,
  ux,
}) => (
  <Flex alignItems="center">
    {photo && <Profile large={large} src={photo.image.src} alt={photo.title} />}
    <IconLink
      large={large}
      negativeColor={negativeColor}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      ux={ux}
    >
      <Text as="span" color={ux ? 'secondary' : 'primary'} mr={2}>
        <FontAwesome name={fontAwesomeIcon} />
      </Text>
      <Text as="span">{name}</Text>
    </IconLink>
  </Flex>
);

SocialLink.propTypes = {
  fontAwesomeIcon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  negativeColor: PropTypes.bool,
  url: PropTypes.string.isRequired,
  photo: PropTypes.shape({
    image: PropTypes.shape({ src: PropTypes.string.isRequired }),
    title: PropTypes.string.isRequired,
  }),
  large: PropTypes.bool,
  ux: PropTypes.bool,
};

export default SocialLink;
