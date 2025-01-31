import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import allQuestions from '../quizQuestions';
import { shuffleQuestionsAndOptions } from '../helper';

type Field = 'React' | 'React Hooks' | 'Redux';
export const allFields: Field[] = ['React', 'React Hooks', 'Redux'];

export interface Question {
  question: string;
  options: QuestionOption[];
}

export interface QuestionOption {
  option: string;
  explanation: string;
  correctAnswer: boolean;
}

export interface QuizState {
  field: Field;
  type: 'Multiple Choice' | 'Open Question';
  questions: Question[];
  selectedAnswer: QuestionOption | null;
  currentQuestionIndex: number;
}

const initialState: QuizState = {
  field: 'React',
  type: 'Multiple Choice',
  questions: shuffleQuestionsAndOptions(allQuestions[0].questions),
  selectedAnswer: null,
  currentQuestionIndex: 0,
};

// Create a quiz slice
export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    changeField: (state, action) => {
      state.field = action.payload;
      // Find the field in multipleChoiceQuestions based on the action payload
      const fieldQuestions =
        allQuestions.find((field) => field.field === action.payload)
          ?.questions || [];
      state.questions = shuffleQuestionsAndOptions(fieldQuestions);
    },
    answerQuestion: (state, action) => {
      const { answer } = action.payload;
      state.selectedAnswer = answer;
    },
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
      state.selectedAnswer = null;
    },
    previousQuestion: (state) => {
      state.currentQuestionIndex -= 1;
      state.selectedAnswer = null;
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
    },
  },
});

// Export actions
export const {
  changeField,
  answerQuestion,
  nextQuestion,
  previousQuestion,
  resetQuiz,
} = quizSlice.actions;
// export const quiz = (state: RootState) => state.quiz;

export default quizSlice.reducer;
