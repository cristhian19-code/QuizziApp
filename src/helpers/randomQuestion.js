import { questions } from "../database/data";

export const randomQuestion = (questions) => {
  return questions[Math.floor(Math.random() * questions.length)];
};

export const listQuestions = async() => {
  let list = [];
  var i = 0;

  while (i < 4) {
    const numberQuestion = Math.floor(Math.random() * questions.length + 1);
    if (!list.includes(numberQuestion)) {
      list.push(numberQuestion);
      i++;
    }
  }

  const listQuestions = await questions.filter((question) =>
    list.includes(question.id)
  );
  
  return listQuestions;
};
