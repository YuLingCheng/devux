import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Flex, Link } from 'rebass';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`;

const Profile = styled.img`
  width: 100px;
  border-radius: 50%;
  border: 5px solid ${props => props.theme.colors.background};
  margin-right: 20px;
`;

const SocialLink = ({ fontAwesomeIcon, name, url, photo }) => (
  <Flex alignItems="center">
    {photo && <Profile src={photo.image.src} alt={photo.title} />}
    <IconLink href={url} target="_blank" rel="noopener noreferrer">
      <FontAwesome name={fontAwesomeIcon} />
      {name}
    </IconLink>
  </Flex>
);

SocialLink.propTypes = {
  fontAwesomeIcon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  photo: PropTypes.shape({
    image: PropTypes.shape({ src: PropTypes.string.isRequired }),
    title: PropTypes.string.isRequired,
  }),
};

export default SocialLink;
