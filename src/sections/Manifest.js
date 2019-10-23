import React from 'react';
import { Box, Flex, Image, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import { Card } from '../components/Card';
import Section from '../components/Section';
import { Heading, Markdown } from '../components/Typography';
import Triangle from '../components/Triangle';
import TextAnimated from '../components/TextAnimated';
import markdownRenderer from '../components/MarkdownRenderer';

const Background = () => (
  <div>
    <Triangle
      color="secondary"
      height={['10vh', '10vh']}
      width={['80vw', '80vw']}
      invertX
      invertY
    />
    <Triangle
      color="primary"
      height={['7vh', '7vh']}
      width={['60vw', '60vw']}
      invertX
      invertY
    />
    <Triangle
      color="primaryText"
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
                workflowExample {
                  id
                  title
                  description
                  image: resize(width: 900, quality: 100) {
                    src
                  }
                }
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
              <Heading
                as="h1"
                uppercase
                lineHeight={2}
                fontWeight="500"
                letterSpacing="6px"
                fontSize={[3, 4, 5]}
                mb={3}
              >
                {pageTitle}
              </Heading>
              {content.map(({ id, ...rest }) => (
                <Box key={id} mb={[2, 3, 4]} id={rest.anchor}>
                  <Heading
                    as="h2"
                    mb={[2, 2, 3]}
                    uppercase
                    lineHeight={2}
                    fontSize={[2, 3, 3]}
                    fontWeight="500"
                    letterSpacing="6px"
                  >
                    <TextAnimated>{rest.title}</TextAnimated>
                  </Heading>
                  <Box key={id} px={[2, 3, 4]}>
                    <Markdown
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
                    <Heading
                      as="h3"
                      uppercase
                      mb={[2, 2, 3]}
                      lineHeight={2}
                      fontWeight="500"
                      fontSize={2}
                      letterSpacing="4px"
                    >
                      <TextAnimated
                        secondary
                      >{`${rest.label} ${rest.number} - ${rest.name}`}</TextAnimated>
                    </Heading>
                    <Box px={[2, 3, 4]}>
                      <Markdown
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
                              <Heading
                                as="h4"
                                fontSize={1}
                                letterSpacing="4px"
                                uppercase
                                mb={3}
                              >
                                {level.type}
                              </Heading>
                              <Markdown
                                source={
                                  level.desc.childMarkdownRemark.rawMarkdownBody
                                }
                                renderers={markdownRenderer}
                              />
                            </Card>
                          ),
                        )}
                      </Flex>
                      {rest.workflowExample && (
                        <Box py={(2, 3, 4)}>
                          <Heading
                            as="h4"
                            uppercase
                            mt={[1, 2, 3]}
                            mb={[2, 2, 3]}
                            lineHeight={2}
                            fontWeight="500"
                            fontSize={2}
                            letterSpacing="4px"
                          >
                            {rest.workflowExample.title}
                          </Heading>
                          <Image
                            my={[1, 2, 3]}
                            src={rest.workflowExample.image.src}
                            alt={rest.workflowExample.title}
                          />
                          <Text as="p" mt={0} lineHeight={2}>
                            {rest.workflowExample.description}
                          </Text>
                        </Box>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
              {conclusion.map(({ id, ...rest }) => (
                <Box key={id} mt={[3, 4, 5]} id={rest.anchor}>
                  <Heading
                    as="h2"
                    mb={[2, 2, 3]}
                    uppercase
                    lineHeight={2}
                    fontSize={[2, 3, 3]}
                    fontWeight="500"
                    letterSpacing="6px"
                  >
                    <TextAnimated>{rest.title}</TextAnimated>
                  </Heading>
                  <Box key={id} px={[2, 3, 4]}>
                    <Markdown
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
