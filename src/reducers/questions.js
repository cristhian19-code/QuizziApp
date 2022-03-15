import { types } from "../types/types";

const initialState = {
    questions: [],
}

export const questionsReducer = (state=initialState,action)=>{
    switch (action.type) {
        case types.setQuestions:
            return {
                questions: action.payload,
            }
        case types.setAnswerUser:
            return {
              questions: state.questions.map((question) =>
                question._id === action.payload._id
                  ? { ...question, userAnswer: action.payload.userAnswer }
                  : question
              ),
            };
        case types.cleanQuestions:
            return {
                questions: [],
            }
        default:
            return state;
    }
}