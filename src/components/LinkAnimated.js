import { Link } from 'gatsby';
import styled from 'styled-components';

const LinkAnimated = styled(Link)`
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 5px;
  color: inherit;
  ${props =>
    props.selected &&
    `border-bottom:  2px solid ${props.theme.colors.primaryLight}`};
  transition: 0.4s;
  cursor: pointer;
  ${props => props.uppercase && `text-transform: uppercase;`}

  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -2px;
    background: ${props => props.theme.colors.secondary};
    height: 2px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }

  &::selection {
    background: ${props => props.theme.colors.secondary};
  }
`;

export default LinkAnimated;
