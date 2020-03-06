export const mapQuestions = contentfulQuestions => {
  return contentfulQuestions.reduce(
    (questionsMap, { node: { id, isEntryPoint, question, answers } }) => {
      return {
        ...questionsMap,
        [id]: {
          id,
          isEntryPoint,
          answers: answers.map(
            ({ answer, levelCharacteristic, nextQuestion }) => ({
              answer: answer && answer.childMarkdownRemark.rawMarkdownBody,
              levelCharacteristic:
                levelCharacteristic && levelCharacteristic.id,
              nextQuestionId: nextQuestion && nextQuestion.id,
            }),
          ),
          question: question && question.childMarkdownRemark.rawMarkdownBody,
        },
      };
    },
    {},
  );
};
