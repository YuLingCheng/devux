import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Flex, Heading, Text } from 'rebass';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['35vh', '40vh']}
      width={['95vw', '55vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '25vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="secondaryDark"
      height={['20vh', '5vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            description
            roles
          }
        }
      `}
      render={data => {
        const { name, description, roles } = data.contentfulAbout;

        return (
          <Flex flexDirection="column" alignItems="center">
            <Heading
              as="h1"
              color="primaryText"
              fontSize={[4, 5, 6]}
              mb={[2, 3, 4]}
            >
              {name}
            </Heading>

            <Heading as="h2" color="primary" fontSize={[3, 4, 5]} mb={[2, 4]}>
              <TextLoop>
                {roles.map(text => (
                  <Text key={text} width={[300, 500]} textAlign="center">
                    @{text}
                  </Text>
                ))}
              </TextLoop>
            </Heading>
            <Text
              as="p"
              color="primaryTextDark"
              fontSize={[1, 2, 3]}
              mb={[2, 3, 4]}
              width={[1, 1, 0.25]}
              textAlign="center"
            >
              {description}
            </Text>

            <SectionLink section="spark">
              {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink>
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
