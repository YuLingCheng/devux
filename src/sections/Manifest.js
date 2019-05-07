import React from 'react';
import { Box, Flex, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import { Card } from '../components/Card';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import TextAnimated from '../components/TextAnimated';
import markdownRenderer from '../components/MarkdownRenderer';

const Background = () => (
  <div>
    <Triangle
      color="primaryDark"
      height={['30vh', '50vh']}
      width={['45vw', '60vw']}
      invertX
    />
    <Triangle
      color="secondaryLight"
      height={['35vh', '20vh']}
      width={['95vw', '70vw']}
    />
    <Triangle
      color="secondary"
      height={['25vh', '30vh']}
      width={['100vw', '30vw']}
    />
    <Triangle
      color="primaryLight"
      height={['25vh', '10vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />
    <Triangle
      color="primaryDark"
      height={['0vh', '10vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const Manifest = () => (
  <Section.Container Background={Background}>
    <Box width={1} px={[1, 2, 6]} py={[2, 3, 4]}>
      <StaticQuery
        query={graphql`
          query ManifestQuery {
            contentfulManifest {
              title
              content {
                id
                title
                anchor
                childContentfulRichContentContentTextNode {
                  childMarkdownRemark {
                    rawMarkdownBody
                  }
                }
              }
              levels {
                id
                name
                number
                label
                childContentfulDevUxLevelDescTextNode {
                  childMarkdownRemark {
                    rawMarkdownBody
                  }
                }
                levelCharacteristic {
                  id
                  type
                  desc {
                    childMarkdownRemark {
                      rawMarkdownBody
                    }
                  }
                }
              }
              conclusion {
                id
                title
                anchor
                childContentfulRichContentContentTextNode {
                  childMarkdownRemark {
                    rawMarkdownBody
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const {
            title: pageTitle,
            content,
            levels,
            conclusion,
          } = data.contentfulManifest;

          return (
            <>
              <Text as="h1">
                <TextAnimated>{pageTitle}</TextAnimated>
              </Text>
              {content.map(({ id, ...rest }) => (
                <Box key={id} mb={[2, 3, 4]} id={rest.anchor}>
                  <Text as="h2" mb={[2, 3, 4]}>
                    <TextAnimated>{rest.title}</TextAnimated>
                  </Text>
                  <Box key={id} px={[2, 3, 4]}>
                    <ReactMarkdown
                      source={
                        rest.childContentfulRichContentContentTextNode
                          .childMarkdownRemark.rawMarkdownBody
                      }
                      renderers={markdownRenderer}
                    />
                  </Box>
                </Box>
              ))}
              <Box mb={[2, 3, 4]}>
                {levels.map(({ id, ...rest }) => (
                  <Box key={id} mb={[2, 3, 4]} id={`level-${rest.number}`}>
                    <Text as="h3">
                      <TextAnimated>{`${rest.label} ${rest.number} - ${
                        rest.name
                      }`}</TextAnimated>
                    </Text>
                    <Box px={[2, 3, 4]}>
                      <ReactMarkdown
                        source={
                          rest.childContentfulDevUxLevelDescTextNode
                            .childMarkdownRemark.rawMarkdownBody
                        }
                        renderers={markdownRenderer}
                      />
                      <Flex justifyContent="space-evenly" flexWrap="wrap">
                        {rest.levelCharacteristic.map(
                          ({ id: levelid, ...level }) => (
                            <Card
                              key={levelid}
                              width={[1, 1, 0.3]}
                              p={3}
                              mb={[2, 2, 0]}
                            >
                              <Text as="h4">
                                <TextAnimated>{level.type}</TextAnimated>
                              </Text>
                              <ReactMarkdown
                                source={
                                  level.desc.childMarkdownRemark.rawMarkdownBody
                                }
                                renderers={markdownRenderer}
                              />
                            </Card>
                          ),
                        )}
                      </Flex>
                    </Box>
                  </Box>
                ))}
              </Box>
              {conclusion.map(({ id, ...rest }) => (
                <Box key={id} mt={[3, 4, 5]} id={rest.anchor}>
                  <Text as="h2" mb={[2, 3, 4]}>
                    <TextAnimated>{rest.title}</TextAnimated>
                  </Text>
                  <Box key={id} px={[2, 3, 4]}>
                    <ReactMarkdown
                      source={
                        rest.childContentfulRichContentContentTextNode
                          .childMarkdownRemark.rawMarkdownBody
                      }
                      renderers={markdownRenderer}
                    />
                  </Box>
                </Box>
              ))}
            </>
          );
        }}
      />
    </Box>
  </Section.Container>
);

export default Manifest;
