import { listQuestions } from "../helpers/randomQuestion";
import { types } from "../types/types";
import { startPlayGame } from "./game";

export const startListQuestions = () => {
  return async (dispatch) => {
    const questions = await listQuestions();
    dispatch(listQuestionsGame(questions));
    dispatch(startPlayGame());
  };
};

const listQuestionsGame = (questions) => ({
  type: types.setQuestions,
  payload: questions,
});

export const startAnswerUser = (answer) => ({
  type: types.setAnswerUser,
  payload: answer,
})

export const startCleanQuestions = () => ({
  type: types.cleanQuestions,
})