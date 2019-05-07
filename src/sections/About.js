import React from 'react';
import { Box, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';

const Background = () => (
  <div>
    <Triangle
      color="secondary"
      height={['30vh', '10vh']}
      width={['100vw', '100vw']}
    />
    <Triangle
      color="secondaryLight"
      height={['50vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['30vh', '20vh']}
      width={['0vw', '50vw']}
      invertX
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
      height={['50vh', '10vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const About = () => (
  <Section.Container id="about" Background={Background}>
    <Box width={1} px={[1, 2, 6]} py={[0, 1, 5]}>
      <Section.Header
        name="The story behind this idea"
        icon="📖"
        label="about"
      />
      <StaticQuery
        query={graphql`
          query AboutQuery {
            contentfulAbout {
              aboutMe {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
              profile {
                title
                image: resize(width: 450, quality: 100) {
                  src
                }
              }
              socialLinks {
                id
                url
                name
                fontAwesomeIcon
                photo {
                  title
                  image: resize(width: 450, quality: 100) {
                    src
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const { aboutMe, profile, socialLinks } = data.contentfulAbout;

          return (
            <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
              <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
                <Fade bottom>
                  <ReactMarkdown
                    source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                    renderers={markdownRenderer}
                  />
                </Fade>
                <Fade bottom>
                  <Flex
                    justifyContent="flex-start"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    {socialLinks.map(({ id, ...rest }) => (
                      <Box key={id} px={[1, 2, 4]}>
                        <SocialLink {...rest} />
                      </Box>
                    ))}
                  </Flex>
                </Fade>
              </Box>

              <Box
                width={[1, 1, 2 / 6]}
                style={{ maxWidth: '300px', margin: 'auto' }}
              >
                <Fade right>
                  <ProfilePicture
                    src={profile.image.src}
                    alt={profile.title}
                    mt={[4, 4, 0]}
                    ml={[0, 0, 1]}
                  />
                </Fade>
              </Box>
            </Flex>
          );
        }}
      />
    </Box>
  </Section.Container>
);

export default About;
