import React from 'react';
import { Box, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import Reveal from 'react-reveal/Reveal';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import markdownRenderer from '../components/MarkdownRenderer';
import { Markdown, Text, AnimatedSpan } from '../components/Typography';

const Background = () => <div />;

const Title = () => (
  <Text as="span">
    Anyone can spark <AnimatedSpan>Dev</AnimatedSpan>
    <AnimatedSpan invert>Ux</AnimatedSpan> culture in their team
  </Text>
);

const Ideas = () => (
  <Section.Container id="spark" Background={Background} fitContent>
    <Box width={[1, 1, 0.64]} margin="auto">
      <Section.Header>
        <Title />
      </Section.Header>
      <StaticQuery
        query={graphql`
          query IdeasQuery {
            contentfulAbout {
              ideas {
                id
                title
                description {
                  childMarkdownRemark {
                    rawMarkdownBody
                  }
                }
                cta
                internalLink
                illustration {
                  title
                  image: resize(width: 350, quality: 100) {
                    src
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const { ideas } = data.contentfulAbout;

          return (
            <Flex
              justifyContent="flex-start"
              flexDirection="column"
              mt={[4, 4, 5]}
            >
              {ideas.map(({ id, ...rest }) => (
                <Box key={id} width={1} mb={[3, 4, 4]}>
                  <Reveal effect="fadeInUp">
                    <Flex
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      flexWrap="wrap"
                    >
                      <Flex flexDirection="column" width={[1, 1, 0.32]}>
                        <Text as="h3" mb={[0, 0, 0]} mt={0} lineHeight={1.6}>
                          {rest.title}
                        </Text>
                      </Flex>
                      <Box width={[1, 1, 0.66]} my={[3, 3, 0]} textAlign="left">
                        <Markdown
                          source={
                            rest.description.childMarkdownRemark.rawMarkdownBody
                          }
                          renderers={markdownRenderer}
                        />
                        <Text mt={[-2, -2, -3]}>
                          <SocialLink
                            url={rest.internalLink}
                            fontAwesomeIcon="book"
                            name="Read More"
                            large
                          />
                        </Text>
                      </Box>
                    </Flex>
                  </Reveal>
                </Box>
              ))}
            </Flex>
          );
        }}
      />
    </Box>
  </Section.Container>
);

export default Ideas;
