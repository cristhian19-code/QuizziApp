export const listQuestions = async (questions) => {
  let list = [];
  var i = 0;

  while (i < 4) {
    const numberQuestion = Math.floor(Math.random() * questions.length + 1);
    if (!list.includes(numberQuestion)) {
      list.push(numberQuestion);
      i++;
    }
  }

  const listQuestions = await questions.filter((question, index) =>
    list.includes(index)
  );

  return listQuestions;
};
