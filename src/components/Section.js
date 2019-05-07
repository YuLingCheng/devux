import React from 'react';
import styled from 'styled-components';
import { Section } from 'react-scroll-section';
import { Heading } from 'rebass';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';
import LinkAnimated from './LinkAnimated';

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;
`;

const DefaultBackground = () => <div />;

const Container = ({ id, children, Background = DefaultBackground }) => {
  if (id)
    return (
      <Section id={id} style={{ position: 'relative' }}>
        <Background />
        <SectionContainer>{children}</SectionContainer>
      </Section>
    );
  return (
    <div style={{ position: 'relative' }}>
      <Background />
      <SectionContainer>{children}</SectionContainer>
    </div>
  );
};

Container.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  Background: PropTypes.func,
};

const Header = ({ name, icon = '', label = '' }) => (
  <Slide top>
    <Heading color="primaryDark" mb={3}>
      <LinkAnimated as="a" selected>
        {name}
        {icon && (
          <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
            {icon}
          </span>
        )}
      </LinkAnimated>
    </Heading>
  </Slide>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default {
  Container,
  Header,
};
