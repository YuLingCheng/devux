import React, { useState, useEffect } from 'react';
import { Box, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import Section from './Section';
import Triangle from './Triangle';
import { mapQuestions } from '../services/quiz';

const Background = () => (
  <div>
    <Triangle
      color="secondary"
      height={['10vh', '10vh']}
      width={['80vw', '60vw']}
      invertX
      invertY
    />
    <Triangle
      color="primary"
      height={['7vh', '7vh']}
      width={['60vw', '40vw']}
      invertX
      invertY
    />
  </div>
);

const Quiz = () => (
  <Section.Container Background={Background} fitContent>
    <Box width={[1, 1, 0.64]} margin="auto" mt={2}>
      <Section.Header name="Contact us" />
      <StaticQuery
        query={graphql`
          query QuizQuery {
            allContentfulQuizQuestion(
              filter: { node_locale: { eq: "en-US" } }
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
                    answer {
                      childMarkdownRemark {
                        rawMarkdownBody
                      }
                    }
                    levelCharacteristic {
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
          const { edges } = data.allContentfulQuizQuestion;
          const questions = mapQuestions(edges);
          const firstQuestionId = Object.keys(questions).find(
            questionId => questions[questionId].isEntryPoint,
          );
          const [currentQuestionId, setCurrentQuestionId] = useState(
            firstQuestionId,
          );

          return (
            <div>
              {currentQuestionId}
              {questions &&
                Object.keys(questions).map(questionId => <h1>{questionId}</h1>)}
            </div>
          );
        }}
      />
    </Box>
  </Section.Container>
);

export default Quiz;
