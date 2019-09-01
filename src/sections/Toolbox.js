import React from 'react';
import { Box, Image } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import { Card } from '../components/Card';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import LinkAnimated from '../components/LinkAnimated';
import markdownRenderer from '../components/MarkdownRenderer';
import { Heading, Markdown, Text } from '../components/Typography';

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

const Toolbox = () => (
  <Section.Container Background={Background}>
    <Box width={1} px={[1, 2, 6]} py={[2, 3, 4]}>
      <StaticQuery
        query={graphql`
          query ToolboxQuery {
            contentfulToolbox {
              title
              description {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
              slides {
                id
                title
                description {
                  childMarkdownRemark {
                    rawMarkdownBody
                  }
                }
                images {
                  id
                  title
                  description
                  file {
                    url
                  }
                }
                levels {
                  number
                  label
                  name
                }
              }
            }
          }
        `}
        render={data => {
          const {
            title: pageTitle,
            description,
            slides,
          } = data.contentfulToolbox;

          return (
            <>
              <Heading
                as="h1"
                uppercase
                lineHeight={2}
                fontWeight="500"
                letterSpacing="6px"
                mb={[2, 2, 3]}
                fontSize={[3, 4, 5]}
              >
                {pageTitle}
              </Heading>
              <Box>
                <Markdown
                  source={description.childMarkdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
                {slides.map(({ id, ...rest }) => (
                  <Card key={id} mb={[2, 3, 4]} id={rest.anchor} p={[2, 3, 4]}>
                    <Text
                      as="h2"
                      mb={[2, 2, 3]}
                      lineHeight={2}
                      fontSize={3}
                      mt={0}
                      textAlign="center"
                    >
                      {rest.title}
                    </Text>
                    {rest.description && (
                      <Markdown
                        source={
                          rest.description.childMarkdownRemark.rawMarkdownBody
                        }
                        renderers={markdownRenderer}
                      />
                    )}
                    {rest.images &&
                      rest.images.map(image => (
                        <Box key={image.id}>
                          <Image src={image.file.url} alt={image.title} />
                          <Text textAlign="center">{image.description}</Text>
                        </Box>
                      ))}
                    {rest.levels.length > 0 && (
                      <Text as="p" textAlign="center" fontWeight="bold">
                        {rest.levels.map(({ name, label, number }) => (
                          <LinkAnimated
                            key={number}
                            to={`manifest#level-${number}`}
                          >
                            {`${label} ${number} - ${name}`}
                          </LinkAnimated>
                        ))}
                      </Text>
                    )}
                  </Card>
                ))}
              </Box>
            </>
          );
        }}
      />
    </Box>
  </Section.Container>
);

export default Toolbox;
