import React from 'react';
import styled, { css } from 'styled-components';
import { Section } from 'react-scroll-section';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';
import { Heading } from './Typography';

const SectionContainer = styled.div`
  ${props => !props.fitContent && 'min-height: 100vh;'}
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;
  ${props =>
    props.invertedColors &&
    css`
      background-color: ${props.theme.colors.primaryText};
      color: ${props.theme.colors.background};
    `}
`;

const DefaultBackground = () => <div />;

const Container = ({
  id,
  children,
  Background = DefaultBackground,
  fitContent,
  invertedColors,
}) => {
  if (id)
    return (
      <Section id={id} style={{ position: 'relative' }}>
        <Background />
        <SectionContainer
          invertedColors={invertedColors}
          fitContent={fitContent}
        >
          {children}
        </SectionContainer>
      </Section>
    );
  return (
    <div style={{ position: 'relative' }}>
      <Background />
      <SectionContainer invertedColors={invertedColors} fitContent={fitContent}>
        {children}
      </SectionContainer>
    </div>
  );
};

Container.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  Background: PropTypes.func,
  fitContent: PropTypes.bool,
  invertedColors: PropTypes.bool,
};

const Header = ({ name, icon = '', label = '', children }) => (
  <Slide top>
    <Heading
      mb={3}
      letterSpacing="6px"
      uppercase
      fontWeight="normal"
      fontSize={[3, 4, 5]}
    >
      {name}
      {children}
      {icon && (
        <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
          {icon}
        </span>
      )}
    </Heading>
  </Slide>
);

Header.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
};

export default {
  Container,
  Header,
};
