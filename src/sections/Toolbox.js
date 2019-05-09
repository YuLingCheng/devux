import React from 'react';
import { Box, Image, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import { Card } from '../components/Card';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import LinkAnimated from '../components/LinkAnimated';
import TextAnimated from '../components/TextAnimated';
import markdownRenderer from '../components/MarkdownRenderer';

const Background = () => (
  <div>
    <Triangle
      color="primaryDark"
      height={['30vh', '20vh']}
      width={['45vw', '90vw']}
      invertX
    />
    <Triangle
      color="secondaryLight"
      height={['35vh', '50vh']}
      width={['95vw', '15vw']}
    />
    <Triangle
      color="secondary"
      height={['25vh', '20vh']}
      width={['100vw', '70vw']}
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
              <Text as="h1">
                <TextAnimated>{pageTitle}</TextAnimated>
              </Text>
              <Box px={[2, 3, 4]}>
                <ReactMarkdown
                  source={description.childMarkdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
                {slides.map(({ id, ...rest }) => (
                  <Card key={id} mb={[2, 3, 4]} id={rest.anchor} p={[2, 3, 4]}>
                    <Text
                      as="h2"
                      fontSize={[1, 2, 3]}
                      mt={0}
                      mb={[2, 3, 4]}
                      textAlign="center"
                    >
                      <TextAnimated>{rest.title}</TextAnimated>
                    </Text>
                    {rest.description && (
                      <ReactMarkdown
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
                          <Text as="p" textAlign="center">
                            {image.description}
                          </Text>
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
