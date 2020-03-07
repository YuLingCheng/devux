export const mapQuestions = contentfulQuestions => {
  return contentfulQuestions.reduce(
    (questionsMap, { node: { id, isEntryPoint, question, answers } }) => {
      return {
        ...questionsMap,
        [id]: {
          id,
          isEntryPoint,
          answers: answers.map(
            ({
              id,
              answer,
              levelCharacteristic,
              nextLevelCharacteristic,
              nextQuestion,
            }) => ({
              id: id,
              answer: answer && answer.childMarkdownRemark.rawMarkdownBody,
              levelCharacteristicId:
                levelCharacteristic && levelCharacteristic.id,
              nextLevelCharacteristicId:
                nextLevelCharacteristic && nextLevelCharacteristic.id,
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

export const mapLevelCharacteristics = contentfulLevelCharacteristics => {
  const levelCharacteristicsMap = contentfulLevelCharacteristics.reduce(
    (
      levelCharacteristicsMap,
      {
        node: {
          id,
          type,
          devux_level,
          childContentfulLevelCharacteristicDescTextNode,
        },
      },
    ) => {
      return [
        ...levelCharacteristicsMap,
        {
          id,
          type,
          level: devux_level && devux_level[0] && devux_level[0].number,
          text:
            childContentfulLevelCharacteristicDescTextNode &&
            childContentfulLevelCharacteristicDescTextNode.childMarkdownRemark
              .rawMarkdownBody,
        },
      ];
    },
    [],
  );
  levelCharacteristicsMap.sort((levelCharA, levelCharB) => {
    if (levelCharA.type.includes('Prod')) {
      return -1;
    }
    if (levelCharB.type.includes('Prod')) {
      return 1;
    }
    if (levelCharA.type.includes('Des') && levelCharB.type.includes('Dev')) {
      return -1;
    }
    if (levelCharB.type.includes('Des') && levelCharA.type.includes('Dev')) {
      return 1;
    }
    if (levelCharB.level > levelCharA.level) {
      return -1;
    }
    if (levelCharB.level < levelCharA.level) {
      return 1;
    }
    return 0;
  });

  return levelCharacteristicsMap;
};
