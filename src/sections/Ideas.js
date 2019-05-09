import React from 'react';
import { Box, Flex, Image, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import ButtonAnimated from '../components/ButtonAnimated';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['100vw', '50vw']}
      invertY
    />

    <Triangle
      color="primary"
      height={['80vh', '10vh']}
      width={['45vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondaryDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const Ideas = () => (
  <Section.Container id="spark" Background={Background}>
    <Box width={1} px={[1, 2, 6]} py={[0, 1, 5]}>
      <Section.Header
        name="Anyone can spark DevUx culture in their team"
        icon="🌟"
        label="star"
      />
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
            <Flex justifyContent="flex-start" flexDirection="column">
              {ideas.map(({ id, ...rest }, index) => (
                <Box
                  key={id}
                  px={[1, 2, 4]}
                  width={1}
                  alignSelf={index % 2 === 0 ? 'flex-start' : 'flex-end'}
                  mb={[2, 3, 4]}
                >
                  <Fade left={index % 2 === 0} right={index % 2 !== 0}>
                    <Flex
                      flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}
                      justifyContent="space-between"
                      alignItems="center"
                      flexWrap="wrap"
                    >
                      <Flex flexDirection="column" width={[1, 1, 0.55]}>
                        <Text as="h3" mb={0}>
                          {rest.title}
                        </Text>
                        <ReactMarkdown
                          source={
                            rest.description.childMarkdownRemark.rawMarkdownBody
                          }
                          renderers={markdownRenderer}
                        />
                        <Box mt={[1, 2, 4]}>
                          <ButtonAnimated to={rest.internalLink} bg="secondary">
                            {rest.cta}
                          </ButtonAnimated>
                        </Box>
                      </Flex>
                      <Text
                        width={[0.4, 0.4, 0.45]}
                        mt={[5, 5, 0]}
                        textAlign="center"
                      >
                        <Image
                          width={350}
                          src={rest.illustration.image.src}
                          alt={rest.illustration.title}
                        />
                      </Text>
                    </Flex>
                  </Fade>
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
