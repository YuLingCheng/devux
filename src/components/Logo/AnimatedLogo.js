import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  --animation-duration: 14s;
  width: ${props => props.width};
  height: ${props => props.height};
  isolation: isolate;
`;

export default props => (
  <SVG
    {...props}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="dev"
      d="M75.1617 25.0003C102.683 25.0877 125 47.458 125 75C125 102.596 102.596 125 75 125H25V75V25H75L75.1617 25.0003Z"
      fill="#8153FD"
    />
    <path
      className="ux"
      d="M125 75H175V125C175 152.596 152.596 175 125 175C97.4043 175 75 152.596 75 125V75H125Z"
      fill="#7BFFB0"
    />
  </SVG>
);
