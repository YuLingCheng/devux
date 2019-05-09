import React from 'react';
import styled from 'styled-components';
import { Text, Flex, Box } from 'rebass';
import Fade from 'react-reveal/Fade';
import { StaticQuery, graphql } from 'gatsby';
import SocialLink from './SocialLink';

const FooterContainer = styled.footer`
  padding: 1em;
  background: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.background};
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = () => (
  <FooterContainer>
    <Fade bottom>
      <Flex justifyContent="center" alignItems="center">
        <StaticQuery
          query={graphql`
            query FooterQuery {
              contentfulAbout {
                socialLinks {
                  id
                  url
                  name
                  fontAwesomeIcon
                }
              }
            }
          `}
          render={data => {
            const { socialLinks } = data.contentfulAbout;

            return (
              <>
                <Box px={[1, 2, 4]}>
                  <Text>Contact Us:</Text>
                </Box>
                {socialLinks.map(({ id, ...rest }) => (
                  <Box key={id} px={[1, 2, 4]}>
                    <SocialLink negativeColor {...rest} />
                  </Box>
                ))}
              </>
            );
          }}
        />
      </Flex>
    </Fade>
  </FooterContainer>
);

export default Footer;
