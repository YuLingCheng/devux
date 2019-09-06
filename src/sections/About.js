import React from 'react';
import { Box, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import Reveal from 'react-reveal/Reveal';
import Section from '../components/Section';
import { Markdown, AnimatedSpan, Text } from '../components/Typography';
import markdownRenderer from '../components/MarkdownRenderer';

const Background = () => <div />;

const Title = () => (
  <Text as="span">
    Why spark the <AnimatedSpan>Dev</AnimatedSpan>
    <AnimatedSpan invert>Ux</AnimatedSpan> culture?
  </Text>
);

const About = () => (
  <Section.Container
    id="about"
    Background={Background}
    invertedColors
    fitContent
  >
    <Box width={[1, 1, 0.64]} margin="auto">
      <Section.Header>
        <Title />
      </Section.Header>
      <StaticQuery
        query={graphql`
          query AboutQuery {
            contentfulAbout {
              aboutMe {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
            }
          }
        `}
        render={data => {
          const { aboutMe } = data.contentfulAbout;

          return (
            <Flex
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              mt={[3, 3, 5]}
            >
              <Box width={1}>
                <Reveal effect="fadeInUp">
                  <Markdown
                    source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                    renderers={markdownRenderer}
                  />
                </Reveal>
              </Box>
            </Flex>
          );
        }}
      />
    </Box>
  </Section.Container>
);

export default About;
