import React from 'react';
import { Box, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="primaryText"
      height={['0vh', '4vh']}
      width={['100vw', '100vw']}
    />
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
  </div>
);

const Contact = () => (
  <Section.Container Background={Background} fitContent>
    <Box width={[1, 1, 0.64]} margin="auto" mt={2}>
      <Section.Header name="Contact us" />
      <StaticQuery
        query={graphql`
          query ContactQuery {
            contentfulAbout {
              socialLinks {
                id
                url
                name
                fontAwesomeIcon
                photo {
                  title
                  image: resize(width: 120, quality: 100) {
                    src
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const { socialLinks } = data.contentfulAbout;

          return (
            <Flex alignItems="center" flexWrap="wrap" mt={[3, 3, 5]}>
              {socialLinks.map(({ id, ...rest }, index) => (
                <Box key={id} mb={[3, 3, 5]} mr={5}>
                  <SocialLink ux={index % 2 !== 0} large {...rest} />
                </Box>
              ))}
            </Flex>
          );
        }}
      />
    </Box>
  </Section.Container>
);

export default Contact;
