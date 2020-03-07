import React, { useState } from 'react';
import { Swipeable } from 'react-swipeable';
import styled, { css } from 'styled-components';
import { Text } from '../components/Typography';
import ButtonAnimated from '../components/ButtonAnimated';
import LinkAnimated from '../components/LinkAnimated';

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
    order: 3;
    margin-right: 0;
    :first-child {
      margin-right: 40px;
    }
  }
`;
const QuestionContainer = styled.div`
  position: absolute;
  padding: 20px 40px;
  width: 100%;
  margin-top: 30px;
  height: 270px;
  border: 2px solid ${props => props.theme.colors.primaryText};
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  :before,
  :after {
    content: '';
    height: 10px;
    width: 100%;
    position: absolute;
    background: hsl(
      ${props => 144 + (props.index * 112) / props.quizLength},
      100%,
      74%
    );
  }
  :before {
    top: 0;
  }
  }
  :after {
    bottom: 0;
  }
  will-change: transform;
  transition: transform .4s ease-in-out;

  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
  &:hover {
    color: ${props => props.theme.colors.primaryDark};
  }
  ${props =>
    props.selected &&
    css`
      color: ${props => props.theme.colors.primary};
      &:hover:after,
      &:hover:before {
        left: 0;
        right: auto;
        width: 100%;
      }
      border-color: ${props => props.theme.colors.secondary};
    `}
`;

const getSign = () => (Math.floor(Math.random() * 2) == 1 ? 1 : -1);

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

  const answer1 = answers && answers[0];
  const answer2 = answers && answers[1];

  const saveAnswer = ({
    levelCharacteristicId,
    nextLevelCharacteristicId,
    nextQuestionId,
  }) => {
    levelCharacteristicId && addLevelCharacteristic(levelCharacteristicId);
    nextLevelCharacteristicId &&
      addNextLevelCharacteristic(nextLevelCharacteristicId);
    setCurrentQuestionId(nextQuestionId);
  };
  const [animationDeltaX, setAnimationDeltaX] = useState(0);
  const [animationDeltaY, setAnimationDeltaY] = useState(0);
  const onAnswer1Selected = ({ deltaX }) => {
    setAnimationDeltaX(0);
    if (deltaX > 50) {
      saveAnswer(answer1);
    }
  };
  const onAnswer2Selected = ({ deltaX }) => {
    setAnimationDeltaX(0);
    if (deltaX < -50) {
      saveAnswer(answer2);
    }
  };
  const [shuffleAnglesMap] = useState(
    questionIds.reduce((shuffle, questionId) => {
      return {
        ...shuffle,
        [questionId]: {
          angle: Math.random() * 8 * getSign(),
          offsetX: Math.random() * 10 * getSign(),
          offsetY: Math.random() * 10 * getSign(),
        },
      };
    }, {}),
  );

  const swipeConfig = {
    delta: 10, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: false, // preventDefault on touchmove, *See Details*
    trackTouch: true, // track touch input
    trackMouse: true, // track mouse input
    onSwiping: ({
      deltaX, // x offset (initial.x - current.x)
      deltaY, // y offset (initial.y - current.y)
    }) => {
      setAnimationDeltaX(-1 * deltaX);
      setAnimationDeltaY(-1 * deltaY);
    },
    onSwipedLeft: onAnswer1Selected,
    onSwipedRight: onAnswer2Selected,
  };
  const getTransform = (
    deltaX,
    deltaY,
    currentQuestionId,
    questionId,
    questions,
  ) => {
    if (currentQuestionId === questionId) {
      return `translate(${deltaX}px, ${deltaY}px) rotate(calc(${
        shuffleAnglesMap[questionId].angle
      }deg + ${deltaX / 8}deg)`;
    }
    if (deltaX !== 0) {
      const answerNumber = deltaX > 0 ? 1 : 0;
      const nextQuestionId =
        questions[currentQuestionId].answers[answerNumber].nextQuestionId;
      if (nextQuestionId && nextQuestionId === questionId) {
        return `translate3d(${shuffleAnglesMap[questionId].offsetX *
          5}px, ${shuffleAnglesMap[questionId].offsetY * 5}px, 0)`;
      }
    }
    return `rotate(${shuffleAnglesMap[questionId].angle}deg)`;
  };

  return (
    <>
      <QuizContainer>
        <AnswersWrapper>
          <Answer
            color="primaryText"
            as="button"
            type="button"
            onClick={() => onAnswer1Selected({ deltaX: 60 })}
            selected={animationDeltaX < 0}
            style={{
              transform:
                animationDeltaX < 0 && `scale(${1 - animationDeltaX / 200})`,
            }}
          >
            <Text fontSize={[1, 1, 2]} letterSpacing="2px">
              {answer1.answer}
            </Text>
          </Answer>
        </AnswersWrapper>
        <QuestionsWrapper>
          <Swipeable {...swipeConfig}>
            {questions &&
              questionIds.map((questionId, index) => {
                const question = questions[questionId];
                const isCurrentQuestion = currentQuestionId === questionId;
                return (
                  <QuestionContainer
                    key={questionId}
                    quizLength={questionsLength}
                    question={question}
                    isCurrentQuestion={isCurrentQuestion}
                    index={index}
                    currentQuestionIndex={currentQuestionIndex}
                    style={{
                      transform: getTransform(
                        animationDeltaX,
                        animationDeltaY,
                        currentQuestionId,
                        questionId,
                        questions,
                      ),
                      top: shuffleAnglesMap[questionId].offsetY,
                      left: shuffleAnglesMap[questionId].offsetX,
                      zIndex: isCurrentQuestion
                        ? questionsLength + 1
                        : questionsLength - index,
                    }}
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
          </Swipeable>
        </QuestionsWrapper>
        <Text
          as="p"
          width={1}
          style={{ order: 2 }}
          textAlign="center"
          fontSize={'12px'}
          mt={-5}
          mb={4}
        >
          <em>Swipe to answer</em>
        </Text>
        <AnswersWrapper>
          <Answer
            color="primaryText"
            as="button"
            type="button"
            onClick={() => onAnswer2Selected({ deltaX: -60 })}
            selected={animationDeltaX > 0}
            style={{
              transform:
                animationDeltaX > 0 && `scale(${1 + animationDeltaX / 200})`,
            }}
          >
            <Text fontSize={[1, 1, 2]} letterSpacing="2px">
              {answer2.answer}
            </Text>
          </Answer>
        </AnswersWrapper>
      </QuizContainer>
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
          uppercase
        >
          Manifest
        </LinkAnimated>
      </Text>
    </>
  );
};
