import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  --animation-duration: 14s;
  width: ${props => props.width};
  height: ${props => props.height};
  isolation: isolate;

  .dev {
    mix-blend-mode: color-dodge;
    animation: dev_color var(--animation-duration) infinite,
      ux_rotate var(--animation-duration) infinite;
  }
  .ux {
    mix-blend-mode: color-dodge;
    animation: ux_color var(--animation-duration) infinite,
      dev_rotate var(--animation-duration) infinite;
  }
  .center_piece {
    animation: center_piece_color var(--animation-duration) infinite;
  }
  @keyframes dev_rotate {
    0%,
    20%,
    80%,
    100% {
      transform: rotate(0deg);
      transform-origin: 50%;
    }
    30%,
    70% {
      transform: rotate(-90deg) translate(0px, -50px);
      transform-origin: 50%;
    }
  }
  @keyframes ux_rotate {
    0%,
    20%,
    80%,
    100% {
      transform: rotate(0deg);
      transform-origin: 50%;
    }
    30%,
    70% {
      transform: rotate(-270deg) translate(50px, 0px);
      transform-origin: 50%;
    }
  }
  @keyframes center_piece_color {
    0%,
    19%,
    30%,
    69%,
    80%,
    100% {
      opacity: 1;
    }
    20%,
    28%,
    70%,
    78% {
      opacity: 0;
    }
  }
  @keyframes dev_color {
    0%,
    20%,
    80%,
    100% {
      fill: #8153fd;
    }
    30%,
    70% {
      fill: #7bffb0;
    }
  }
  @keyframes ux_color {
    0%,
    20%,
    80%,
    100% {
      fill: #7bffb0;
    }
    30%,
    70% {
      fill: #8153fd;
    }
  }
`;

export default props => (
  <SVG
    {...props}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="dev"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M75.1617 25.0003C102.683 25.0877 125 47.458 125 75C125 102.596 102.596 125 75 125H25V75V25H75L75.1617 25.0003Z"
      fill="#8153FD"
    />
    <path
      class="ux"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M125 75H175V125C175 152.596 152.596 175 125 175C97.4043 175 75 152.596 75 125V75H125Z"
      fill="#7BFFB0"
    />
  </SVG>
);
