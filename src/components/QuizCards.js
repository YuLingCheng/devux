import React from 'react';
import { Text } from '../components/Typography';
import ButtonAnimated from '../components/ButtonAnimated';
import LinkAnimated from '../components/LinkAnimated';
import styled from 'styled-components';

const QuizContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  @media screen and (min-width: 600px) {
    > :not(:last-child) {
      margin-right: 40px;
    }
  }
  flex-wrap: wrap;
`;

const QuestionsWrapper = styled.div`
  position: relative;
  flex: 0 0 50%;
  margin: 0 auto;
  height: 380px;

  @media screen and (max-width: 600px) {
    flex: 0 0 100%;
    order: 1;
  }
`;
const AnswersWrapper = styled.div`
  text-align: center;
  flex: 1;
  @media screen and (max-width: 600px) {
    order: 2;
    margin-right: 0;
    :first-child {
      margin-right: 40px;
    }
  }
`;
const QuestionContainer = styled.div`
  position: absolute;
  padding: 20px 40px;
  z-index: ${props =>
    props.isCurrentQuestion
      ? props.quizLength + 1
      : props.quizLength - props.index};
  width: 100%;
  height: 270px;
  border: 2px solid ${props => props.theme.colors.primaryText};
  background-color: white;
  top: ${props => {
    if (props.index === props.currentQuestionIndex)
      return `calc(${props.quizLength} * 10px)`;
    if (props.index < props.currentQuestionIndex)
      return `calc(${props.quizLength - 1 - props.index} * 10px)`;
    return `calc(${props.quizLength - props.index} * 10px)`;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0px -2px ${props => props.theme.colors.white};
  :before {
    content: '';
    height: 10px;
    width: 100%;
    top: 0;
    position: absolute;
    background: hsl(
      ${props => 144 + (props.index * 112) / props.quizLength},
      100%,
      74%
    );
  }
`;

const Answer = styled(ButtonAnimated)`
  border-left: none;
  border-right: none;
  min-width: 100px;
  padding: 20px 0;
  background: white;
  &:not(:last-of-type) {
    margin-right: 100px;
  }
`;

export default ({
  questions,
  currentQuestionId,
  setCurrentQuestionId,
  addLevelCharacteristic,
  addNextLevelCharacteristic,
}) => {
  const questionIds = Object.keys(questions);
  const questionsLength = questionIds.length;
  const currentQuestionIndex = questionIds.indexOf(currentQuestionId);
  const { answers } = questions[currentQuestionId];
  const {
    answer: answer1,
    id: anwser1Id,
    levelCharacteristicId: anwser1LevelCharacteristicId,
    nextLevelCharacteristicId: answer1NextLevelCharacteristicId,
    nextQuestionId: anwser1NextQuestionId,
  } = answers && answers[0];
  const {
    answer: answer2,
    id: answer2Id,
    levelCharacteristicId: anwser2LevelCharacteristicId,
    nextLevelCharacteristicId: answer2NextLevelCharacteristicId,
    nextQuestionId: answer2NextQuestionId,
  } = answers && answers[1];
  const saveAnswer = (
    levelCharacteristicId,
    nextLevelCharacteristicId,
    nextQuestionId,
  ) => {
    levelCharacteristicId && addLevelCharacteristic(levelCharacteristicId);
    nextLevelCharacteristicId &&
      addNextLevelCharacteristic(nextLevelCharacteristicId);
    setCurrentQuestionId(nextQuestionId);
  };

  return (
    <QuizContainer>
      <AnswersWrapper>
        <Answer
          color="primaryText"
          as="button"
          type="button"
          key={anwser1Id}
          onClick={() =>
            saveAnswer(
              anwser1LevelCharacteristicId,
              answer1NextLevelCharacteristicId,
              anwser1NextQuestionId,
            )
          }
        >
          <Text fontSize={[1, 1, 2]} letterSpacing="2px">
            {answer1}
          </Text>
        </Answer>
      </AnswersWrapper>
      <QuestionsWrapper>
        {questions &&
          questionIds.map((questionId, index) => {
            const question = questions[questionId];
            if (!question) return <div>Result !</div>;
            const isCurrentQuestion = currentQuestionId === questionId;
            return (
              <QuestionContainer
                key={questionId}
                quizLength={questionsLength}
                question={question}
                isCurrentQuestion={isCurrentQuestion}
                index={index}
                currentQuestionIndex={currentQuestionIndex}
              >
                <Text
                  as="h3"
                  fontSize={[2, 3, 3]}
                  lineHeight={2}
                  letterSpacing="1px"
                  fontWeight="500"
                >
                  {question.question}
                </Text>
              </QuestionContainer>
            );
          })}
      </QuestionsWrapper>
      <AnswersWrapper>
        <Answer
          color="primaryText"
          as="button"
          type="button"
          key={answer2Id}
          onClick={() =>
            saveAnswer(
              anwser2LevelCharacteristicId,
              answer2NextLevelCharacteristicId,
              answer2NextQuestionId,
            )
          }
        >
          <Text fontSize={[1, 1, 2]} letterSpacing="2px">
            {answer2}
          </Text>
        </Answer>
      </AnswersWrapper>
      <Text
        width={1}
        textAlign="center"
        letterSpacing="1px"
        mt={[3, 3, 5]}
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
    </QuizContainer>
  );
};
