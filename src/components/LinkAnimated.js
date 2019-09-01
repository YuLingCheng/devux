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
    `border-bottom:  5px solid ${props.theme.colors.primaryLight}`};
  transition: 0.4s;
  cursor: pointer;
  ${props => props.uppercase && `text-transform: uppercase;`}
  line-height: 3rem;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -5px;
    background: ${props => props.theme.colors.secondary};
    height: 5px;
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
