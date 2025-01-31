import { Question, QuestionOption } from './redux/quizSlice';

export const shuffleQuestionsAndOptions = (questions: Question[]) => {
  // Shuffle the questions first
  const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);

  // Shuffle the options for each question
  const shuffledQuestionsWithOptions = shuffledQuestions.map((question) => {
    const shuffledOptions = [...question.options].sort(
      () => Math.random() - 0.5
    );
    return { ...question, options: shuffledOptions };
  });

  return shuffledQuestionsWithOptions;
};
