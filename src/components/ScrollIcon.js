import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const lineHeight = '60px';

const ScrollButton = styled.button`
  padding: 0 50px;
  height: ${lineHeight};
  background: transparent;
  border: solid 0 transparent;
  outline: none;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
`;

const ScrollLineContainer = styled.div`
  width: 2px;
  height: ${lineHeight};
`;

const ScrollAnimation = keyframes`
  0%{
    background-position: 0 calc(-1 * ${lineHeight});
  }
  75% {
    background-position: 0 0;
  }
  100%{
    background-position: 0 ${lineHeight};
  }
`;

const ScrollLine = styled.span`
  width: 100%;
  height: 100%;
  display: block;
  background: linear-gradient(
    to bottom,
    ${props => props.theme.colors.primaryText} 50%,
    ${props => props.theme.colors.background} 50%
  );
  background-position: 0 calc(-1 * ${lineHeight});
  background-size: 100% 200%;
  animation: ${ScrollAnimation} 3s cubic-bezier(0.76, 0, 0.3, 1) forwards
    infinite;
`;

const ScollIcon = ({ onClick }) => (
  <ScrollButton onClick={onClick}>
    <ScrollLineContainer>
      <ScrollLine />
    </ScrollLineContainer>
  </ScrollButton>
);

ScollIcon.propTypes = {
  onClick: PropTypes.func,
};

export default ScollIcon;
