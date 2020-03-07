import React from 'react';
import { Box, Flex, Image } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import Reveal from 'react-reveal/Reveal';
import Section from '../components/Section';
import {
  Heading,
  Markdown,
  AnimatedSpan,
  Text,
} from '../components/Typography';
import markdownRenderer from '../components/MarkdownRenderer';
import LinkAnimated from '../components/LinkAnimated';
import AnimatedLogo from '../components/Logo/AnimatedLogo';

const Background = () => <div />;

const Title = () => (
  <Text as="span">
    Why spark the <AnimatedSpan>Dev</AnimatedSpan>
    <AnimatedSpan invert>Ux</AnimatedSpan> culture?
  </Text>
);

const About = () => (
  <Section.Container
    id="about"
    Background={Background}
    invertedColors
    fitContent
  >
    <Box width={[1, 1, 0.64]} margin="auto">
      <Section.Header>
        <Title />
      </Section.Header>
      <StaticQuery
        query={graphql`
          query AboutQuery {
            contentfulAbout {
              aboutMe {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
            }
          }
        `}
        render={data => {
          const { aboutMe } = data.contentfulAbout;

          return (
            <Flex
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              mt={[3, 3, 5]}
            >
              <Box width={1} mb={3}>
                <Reveal effect="fadeInUp">
                  <Markdown
                    source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                    renderers={markdownRenderer}
                  />
                </Reveal>
              </Box>
              <Box mb={4}>
                <AnimatedLogo height="100px" />
              </Box>
              <Box width={1}>
                <Heading as="h2" fontSize={3} letterSpacing="2px" mb="3">
                  We toured Europe in 2019 to spread the DevUx culture.
                </Heading>
                <Text mb={4} lineHeight={2}>
                  Thank you so much for coming to see us and watching our
                  videos.
                </Text>
              </Box>
              <Flex width={1} flexWrap="wrap" justifyContent="space-evenly">
                <Box mt={3} mb={5} width={[1, 1, 0.45]}>
                  <Heading
                    as="h3"
                    fontSize={2}
                    uppercase
                    letterSpacing="1px"
                    mb="3"
                  >
                    <LinkAnimated
                      as="a"
                      selected
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://gotober.com/2019/sessions/1049/building-better-products-faster-devux-is-the-new-devops"
                    >
                      Goto Berlin October 2019
                    </LinkAnimated>
                  </Heading>
                  <iframe
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: '210px',
                    }}
                    src="https://www.youtube.com/embed/uWIfnPc1wC0?start=1"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Box>
                <Box mt={3} mb={5} width={[1, 1, 0.45]}>
                  <Heading
                    as="h3"
                    fontSize={2}
                    uppercase
                    letterSpacing="1px"
                    mb="3"
                  >
                    <LinkAnimated
                      as="a"
                      selected
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://cssconfbp.rocks/speakers/yuling/"
                    >
                      CSSConf Budapest September 2019
                    </LinkAnimated>
                  </Heading>
                  <iframe
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: '210px',
                    }}
                    src="https://www.youtube.com/embed/GeZxuhnRhSY?start=1"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Box>
                <Box mt={3} mb={5} width={[1, 0.45, 0.45]}>
                  <Heading
                    as="h3"
                    fontSize={2}
                    uppercase
                    letterSpacing="1px"
                    mb="3"
                  >
                    <LinkAnimated
                      as="a"
                      selected
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://devfest2019.gdgnantes.com/sessions/building_better_products_faster__devux_is_the_new_devops/"
                    >
                      DevFest Nantes September 2019
                    </LinkAnimated>
                  </Heading>
                  <iframe
                    style={{
                      width: '100%',
                      height: '100%',
                      maxHeight: '220px',
                    }}
                    src="https://www.youtube.com/embed/PByOCtKdJhM?start=1"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Box>
                <Box mt={3} mb={5} width={[1, 0.45, 0.3]}>
                  <Heading
                    as="h3"
                    fontSize={2}
                    uppercase
                    letterSpacing="1px"
                    mb="3"
                  >
                    <LinkAnimated
                      as="a"
                      selected
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://2019.frontconf.com/talks/27-04-2019/spreading-the-love-between-designers-and-devs-spark-the-devux-culture"
                    >
                      FrontConf Munich April 2019
                    </LinkAnimated>
                  </Heading>
                  <Image
                    src="https://pbs.twimg.com/media/D5Ki0RtWwAEgHVH?format=jpg&name=small"
                    alt="FrontConf Munich DevUx talk"
                    style={{
                      width: '100%',
                    }}
                  />
                </Box>
              </Flex>
            </Flex>
          );
        }}
      />
    </Box>
  </Section.Container>
);

export default About;
