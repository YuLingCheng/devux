import React from 'react';
import { SectionLink } from 'react-scroll-section';
import { Flex } from 'rebass';
import ScrollIcon from '../components/ScrollIcon';
import Section from '../components/Section';
import { Heading, AnimatedSpan } from '../components/Typography';

const Background = () => <div />;

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <Flex flexDirection="column" alignItems="center">
      <Heading
        as="h1"
        color="primaryText"
        width={[0.85, 0.85, 0.64]}
        fontSize={[3, 4, 5]}
        textAlign="left"
        marginBottom={[3, 3, 3]}
        lineHeight={2}
        letterSpacing="1px"
        fontWeight="500"
        ml={[0, 0, 3]}
      >
        A culture of collaboration between{' '}
        <AnimatedSpan>designers</AnimatedSpan> and{' '}
        <AnimatedSpan invert>developers</AnimatedSpan> to better enjoy working
        together —
        <br />A set of practices to build better products faster
      </Heading>
      <SectionLink section="spark">
        {({ onClick }) => <ScrollIcon onClick={onClick} />}
      </SectionLink>
    </Flex>
  </Section.Container>
);

export default LandingPage;
