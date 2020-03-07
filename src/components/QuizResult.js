import React from 'react';
import { Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import groupBy from 'lodash.groupby';
import styled from 'styled-components';
import { Heading, Text, Markdown } from './Typography';
import LinkAnimated from './LinkAnimated';
import { Card } from '../components/Card';
import AnimatedLogo from '../components/Logo/AnimatedLogo';
import { mapLevelCharacteristics } from '../services/quiz';
import markdownRenderer from '../components/MarkdownRenderer';

const SmallCard = styled(Card)`
  & > ${Markdown} > p {
    font-size: 14px;
    line-height: 1.5;
    margin: 10px 0;
  }
`;
const LevelCard = styled(SmallCard)`
  &:not(:last-child) {
    opacity: 0.5;
  }
`;

const Tag = styled.p`
  text-align: right;
  margin: 5px 0;
  > span {
    background-color: ${props => props.theme.colors.primary};
    filter: grayscale(${props => (props.level ? 1 - props.level / 3 : 0)});
    color: ${props => props.theme.colors.white};
    padding: 5px 10px;
    border-radius: 8px;
    font-size: 11px;
    letter-spacing: 2px;
  }
`;
const tagMap = {
  1: 'Nice 🙌',
  2: 'Great 🙌',
  3: 'Awesome 🙌',
};
const QuizResult = ({
  levelCharacteristicIds,
  nextLevelCharacteristicIds,
  resetQuiz,
}) => (
  <StaticQuery
    query={graphql`
      query LevelCharacteristicsQuery {
        allContentfulLevelCharacteristic(
          filter: { node_locale: { eq: "en-US" } }
        ) {
          edges {
            node {
              id
              type
              devux_level {
                number
              }
              childContentfulLevelCharacteristicDescTextNode {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
            }
          }
        }
        contentfulRichContent(title: { eq: "Requirements" }) {
          title
          childContentfulRichContentContentTextNode {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
      }
    `}
    render={data => {
      const { contentfulRichContent: requirements } = data;
      const { edges } = data.allContentfulLevelCharacteristic;
      const levelChars = mapLevelCharacteristics(edges);
      const isNewProject = levelCharacteristicIds.length === 0;
      const currentLevelChars = levelChars.filter(chars =>
        levelCharacteristicIds.includes(chars.id),
      );
      const currentLevelCharGroups = groupBy(
        currentLevelChars,
        ({ type }) => type,
      );
      const isLevel3 =
        currentLevelChars.filter(({ level }) => level === 3).length === 3;

      let nextLevelChars = levelChars.filter(chars =>
        nextLevelCharacteristicIds.includes(chars.id),
      );
      if (isNewProject) {
        nextLevelChars = levelChars.filter(
          chars => chars.level === 1 || chars.level === 2,
        );
      }
      const nextLevelCharGroups = groupBy(nextLevelChars, ({ type }) => type);
      const focusLevel = Math.min(...nextLevelChars.map(({ level }) => level));
      return (
        <Box width={[1, 1, 0.8]} margin="auto">
          {!isNewProject && (
            <Box mb={[3, 3, 5]}>
              <Heading
                as="h2"
                mb={[2, 2, 4]}
                textAlign="center"
                uppercase
                letterSpacing="4px"
              >
                Current level
              </Heading>
              <Flex justifyContent="space-evenly" flexWrap="wrap">
                {Object.keys(currentLevelCharGroups).map(type => (
                  <Flex
                    width={[1, 0.3, 0.3]}
                    flexDirection="column"
                    justifyContent="flex-start"
                    key={type}
                  >
                    {currentLevelCharGroups[type] &&
                      currentLevelCharGroups[type].map(
                        ({ id, type, level, text }, index) => {
                          const ignoreLevel =
                            index > 0 &&
                            level -
                              currentLevelCharGroups[type][index - 1].level >
                              1;
                          if (ignoreLevel) {
                            currentLevelCharGroups[type].pop(index);
                            return;
                          }
                          return (
                            <LevelCard
                              key={id}
                              width={[1, 1, 1]}
                              p={3}
                              pb={0}
                              mb={[2, 2, 2]}
                              initialHeight
                            >
                              {tagMap[level] && (
                                <Tag level={level}>
                                  <span>{tagMap[level]}</span>
                                </Tag>
                              )}
                              <Heading
                                as="h3"
                                fontSize={1}
                                letterSpacing="2px"
                                uppercase
                                mb={[2, 2, 3]}
                              >
                                {level > 0 ? '✅' : '🚦'} {type} level {level}
                              </Heading>
                              <Markdown
                                source={text}
                                renderers={markdownRenderer}
                              />
                            </LevelCard>
                          );
                        },
                      )}
                  </Flex>
                ))}
              </Flex>
            </Box>
          )}
          <Box mt={[5, 5, 3]} mb={[2, 2, 3]}>
            {isLevel3 ? (
              <>
                <Heading
                  as="h2"
                  mb={[2, 2, 4]}
                  textAlign="center"
                  uppercase
                  letterSpacing="4px"
                >
                  Congratulations, you are awesome!
                </Heading>
                <Box textAlign="center">
                  <AnimatedLogo height="100px" />
                </Box>
                <Text
                  textAlign="center"
                  letterSpacing="1px"
                  mb={[3, 3, 4]}
                  lineHeight={2}
                >
                  Keep spreading the love between developers and designers{' '}
                  <br />
                  and growing the{' '}
                  <LinkAnimated
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`manifest`}
                    selected
                  >
                    DevUx culture
                  </LinkAnimated>{' '}
                  in your network. Share!
                </Text>
              </>
            ) : (
              <>
                <Heading
                  as="h2"
                  mb={[2, 2, 4]}
                  textAlign="center"
                  uppercase
                  letterSpacing="4px"
                >
                  {isNewProject
                    ? 'Everything you need to get started'
                    : 'Next goals'}
                </Heading>
                <Text
                  textAlign="center"
                  letterSpacing="1px"
                  mb={[3, 3, 4]}
                  lineHeight={2}
                >
                  Here is what you should focus on{' '}
                  {isNewProject
                    ? 'when starting a new project.'
                    : 'to improve your collaboration.'}
                  <br />
                  Checkout the{' '}
                  <LinkAnimated
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`toolbox`}
                    selected
                  >
                    Toolbox
                  </LinkAnimated>{' '}
                  for practical examples of what you could do.
                </Text>
                {isNewProject && (
                  <>
                    <Heading
                      as="h3"
                      letterSpacing="2px"
                      uppercase
                      mb={[2, 2, 3]}
                      fontSize={[2, 2, 3]}
                      textAlign="center"
                    >
                      {requirements.title}
                    </Heading>
                    <Box
                      width={[1, 1, 0.75]}
                      margin="auto"
                      mt={[3, 3, 4]}
                      mb={[4, 4, 5]}
                    >
                      <Markdown
                        source={
                          requirements.childContentfulRichContentContentTextNode
                            .childMarkdownRemark.rawMarkdownBody
                        }
                        renderers={markdownRenderer}
                      />
                    </Box>
                    <Heading
                      as="h3"
                      letterSpacing="2px"
                      uppercase
                      mb={[3, 3, 4]}
                      fontSize={[2, 2, 3]}
                      textAlign="center"
                    >
                      Your goals for the project start
                    </Heading>
                  </>
                )}
                <Flex justifyContent="space-evenly" flexWrap="wrap">
                  {Object.keys(nextLevelCharGroups).map(type => (
                    <Flex
                      width={[1, 0.3, 0.3]}
                      flexDirection="column"
                      key={type}
                    >
                      {nextLevelCharGroups[type] &&
                        nextLevelCharGroups[type].map(
                          ({ id, type, level, text }, index) => {
                            const maxLevel = currentLevelCharGroups[type]
                              ? Math.max(
                                  ...currentLevelCharGroups[type].map(
                                    ({ level }) => level,
                                  ),
                                )
                              : 0;
                            const ignoreLevel =
                              (level === 3 &&
                                nextLevelCharGroups[type] &&
                                nextLevelCharGroups[type][index - 1] &&
                                nextLevelCharGroups[type][index - 1].level ===
                                  1) ||
                              level <= maxLevel;
                            if (ignoreLevel) return;
                            return (
                              <SmallCard
                                key={id}
                                width={[1, 1, 1]}
                                p={3}
                                pb={0}
                                mb={[2, 2, 2]}
                                style={{
                                  opacity:
                                    !isNewProject && level > focusLevel && 0.5,
                                  order:
                                    level > focusLevel && nextLevelChars.length,
                                }}
                                initialHeight
                              >
                                <Heading
                                  as="h3"
                                  fontSize={1}
                                  letterSpacing="2px"
                                  uppercase
                                  mb={3}
                                >
                                  {level === focusLevel && '🎯'}
                                  {type} level {level}
                                </Heading>
                                <Markdown
                                  source={text}
                                  renderers={markdownRenderer}
                                />
                              </SmallCard>
                            );
                          },
                        )}
                    </Flex>
                  ))}
                </Flex>
                <Text
                  textAlign="center"
                  letterSpacing="1px"
                  mt={[3, 3, 4]}
                  mb={[3, 3, 4]}
                  lineHeight={2}
                >
                  Want to lean more ? Read our{' '}
                  <LinkAnimated
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`manifest`}
                    selected
                  >
                    Manifest
                  </LinkAnimated>
                </Text>
              </>
            )}
            <Text
              textAlign="center"
              letterSpacing="2px"
              mt={[3, 3, 4]}
              mb={[3, 3, 4]}
              lineHeight={2}
              fontSize={1}
              uppercase
            >
              <LinkAnimated as="span" onClick={resetQuiz}>
                Reassess
              </LinkAnimated>
            </Text>
          </Box>
        </Box>
      );
    }}
  />
);

export default QuizResult;
