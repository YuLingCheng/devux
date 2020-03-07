import React, { useState } from 'react';
import { Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import Section from './Section';
import Triangle from './Triangle';
import QuizCards from './QuizCards';
import QuizResult from './QuizResult';
import { Heading, Text } from './Typography';
import { mapQuestions } from '../services/quiz';

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
const Quiz = () => (
  <Section.Container Background={Background}>
    <Box width={1} margin="auto" mt={[1, 4, 5]}>
      <Heading
        as="h1"
        mt={[1, 1, 2]}
        mb={[3, 3, 4]}
        letterSpacing="6px"
        uppercase
        fontWeight="normal"
        fontSize={[3, 4, 5]}
        textAlign="center"
      >
        Assess your collaboration
      </Heading>

      <StaticQuery
        query={graphql`
          query QuizQuery {
            allContentfulQuizQuestion(
              filter: { node_locale: { eq: "en-US" } }
              sort: { fields: isEntryPoint }
            ) {
              edges {
                node {
                  isEntryPoint
                  id
                  question {
                    childMarkdownRemark {
                      rawMarkdownBody
                    }
                  }
                  answers {
                    id
                    answer {
                      childMarkdownRemark {
                        rawMarkdownBody
                      }
                    }
                    levelCharacteristic {
                      id
                    }
                    nextLevelCharacteristic {
                      id
                    }
                    nextQuestion {
                      id
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const [levelCharacteristics, setLevelCharacteristics] = useState([]);
          const [
            nextLevelCharacteristics,
            setNextLevelCharacteristics,
          ] = useState([]);
          const addLevelCharacteristic = charactetistic => {
            return (
              !levelCharacteristics.includes(charactetistic) &&
              setLevelCharacteristics([...levelCharacteristics, charactetistic])
            );
          };
          const addNextLevelCharacteristic = charactetistic =>
            !nextLevelCharacteristics.includes(charactetistic) &&
            setNextLevelCharacteristics([
              ...nextLevelCharacteristics,
              charactetistic,
            ]);
          const { edges } = data.allContentfulQuizQuestion;
          const questions = mapQuestions(edges);
          const firstQuestionId = Object.keys(questions).find(
            questionId => questions[questionId].isEntryPoint,
          );
          const [currentQuestionId, setCurrentQuestionId] = useState(
            firstQuestionId,
          );
          const resetQuiz = () => {
            setLevelCharacteristics([]);
            setNextLevelCharacteristics([]);
            setCurrentQuestionId(firstQuestionId);
          };

          if (currentQuestionId)
            return (
              <div>
                <QuizCards
                  questions={questions}
                  currentQuestionId={currentQuestionId}
                  setCurrentQuestionId={setCurrentQuestionId}
                  addLevelCharacteristic={addLevelCharacteristic}
                  addNextLevelCharacteristic={addNextLevelCharacteristic}
                />
              </div>
            );

          return (
            <div>
              <QuizResult
                levelCharacteristicIds={levelCharacteristics}
                nextLevelCharacteristicIds={nextLevelCharacteristics}
                resetQuiz={resetQuiz}
              />
            </div>
          );
        }}
      />
    </Box>
  </Section.Container>
);

export default Quiz;
