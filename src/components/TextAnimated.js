import styled from 'styled-components';

const TextAnimated = styled.span`
  position: relative;
  padding-bottom: 5px;
  color: inherit;
  border-bottom: 2px solid
    ${props =>
      props.secondary
        ? props.theme.colors.secondary
        : props.theme.colors.primary};
  transition: 0.4s;
  line-height: 3rem;
  &::selection {
    background: ${props => props.theme.colors.secondary};
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -2px;
    background: ${props =>
      props.secondary
        ? props.theme.colors.secondaryLight
        : props.theme.colors.primaryLight};
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
`;

export default TextAnimated;
