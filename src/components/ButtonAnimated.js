import { Link } from 'gatsby';
import styled from 'styled-components';

const ButtonAnimated = styled(Link)`
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding: 5px 0;
  border-top: 2px solid
    ${props =>
      props.selected
        ? props.theme.colors.primaryDark
        : props.theme.colors.primaryLight};
  border-bottom: 2px solid
    ${props =>
      props.selected
        ? props.theme.colors.primaryDark
        : props.theme.colors.primaryLight};
  transition: 0.4s;
  cursor: pointer;
  color: ${props =>
    props.theme.colors[props.color] || props.theme.colors.primary};
  font-weight: bold;
  ${props => props.uppercase && `text-transform: uppercase;`}
  box-sizing: border-box;

  &:after,
  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 0;
    background: ${props => props.theme.colors.secondary};
    height: 2px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  &:after {
    bottom: -2px;
  }
  &:before {
    top: -2px;
  }

  &:hover:after,
  &:hover:before {
    left: 0;
    right: auto;
    width: 100%;
  }
  &::selection {
    background: ${props => props.theme.colors.secondary};
  }
`;

export default ButtonAnimated;
