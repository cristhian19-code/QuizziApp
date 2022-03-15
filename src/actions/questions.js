import { fetchConToken } from "../helpers/fetchApi";
import { listQuestions } from "../helpers/randomQuestion";
import { types } from "../types/types";

export const startListQuestions = () => {
  return async (dispatch) => {
    const resQuestions = await fetchConToken("GET", "question");
    const questions = await listQuestions(resQuestions.questions);
    dispatch(listQuestionsGame(questions));
  };
};

const listQuestionsGame = (questions) => ({
  type: types.setQuestions,
  payload: questions,
});

export const startAnswerUser = (answer) => ({
  type: types.setAnswerUser,
  payload: answer,
});

export const startCleanQuestions = () => ({
  type: types.cleanQuestions,
});
