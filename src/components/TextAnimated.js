import styled from 'styled-components';

const TextAnimated = styled.span`
  position: relative;
  padding-bottom: 5px;
  color: inherit;
  border-bottom: 5px solid ${props => props.theme.colors.primaryLight};
  transition: 0.4s;
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
`;

export default TextAnimated;
