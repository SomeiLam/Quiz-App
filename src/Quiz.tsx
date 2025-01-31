import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Platform,
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {
  answerQuestion,
  nextQuestion,
  QuestionOption,
  resetQuiz,
} from './redux/quizSlice';
import QuizDetails from './QuizDetails';
import { QuizState } from './redux/quizSlice';
import QuizSummary from './QuizSummary';

const Quiz = () => {
  const { questions, currentQuestionIndex, selectedAnswer } = useSelector(
    (state: { quiz: QuizState }) => state.quiz
  );
  const dispatch = useDispatch();

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerQuestion = (answer: QuestionOption) => {
    dispatch(answerQuestion({ answer }));
  };
  console.log(currentQuestion);
  if (currentQuestionIndex >= questions.length) {
    return <QuizSummary questions={questions} />;
  }

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <QuizDetails />
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          <View style={styles.buttonContainer}>
            {currentQuestion.options.map((option, index) => (
              <View key={option.option}>
                <TouchableOpacity
                  onPress={() => handleAnswerQuestion(option)}
                  style={[
                    styles.button,
                    selectedAnswer === option &&
                      option.correctAnswer &&
                      styles.correctSelection,
                    selectedAnswer === option &&
                      !option.correctAnswer &&
                      styles.wrongSelection,
                  ]}
                >
                  <Text style={styles.indexText}>{index + 1}.</Text>
                  <Text style={styles.buttonText}>{option.option}</Text>
                </TouchableOpacity>
                {selectedAnswer === option && (
                  <View style={styles.explanationContainer}>
                    <Text style={styles.buttonText}>{option.explanation}</Text>
                    {selectedAnswer.correctAnswer && (
                      <Button
                        onPress={() => {
                          dispatch(nextQuestion());
                        }}
                        title={
                          currentQuestionIndex === questions.length - 1
                            ? 'Go To Quiz Summary'
                            : 'Next Question'
                        }
                      />
                    )}
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  scrollContainer: {
    flexGrow: 1, // Allow scrollable content to take full space
    alignItems: 'center',
    paddingTop: Platform.OS === 'web' ? 50 : 100,
    gap: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: Platform.OS === 'web' ? 20 : 30,
    color: '#FFF',
  },
  questionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    // marginLeft: 10,
    // marginRight: 10,
    width: '90%',
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    marginBottom: 30,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column', // Keep buttons in a column
    justifyContent: 'center', // Align items in the center vertically
    gap: 15, // Add spacing between buttons
    marginBottom: 10,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#07135c',
    width: '95%', // Ensure buttons take the full width
    // flexWrap: 'wrap', // Allow the text to wrap within the button
  },
  correctSelection: {
    backgroundColor: '#1ea9e99a',
    fontWeight: 'bold',
  },
  wrongSelection: {
    backgroundColor: '#d3408286',
    fontWeight: 'bold',
  },
  indexText: {
    color: '#07135c',
    fontSize: 18,
  },
  buttonText: {
    color: '#07135c',
    fontSize: 18,
    flexShrink: 1, // Allow text to shrink if it overflows
    width: '100%', // Make sure text does not exceed the width of the button
  },
  detailsContainer: {
    marginBottom: 20,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.5,
    elevation: 5,
  },
  detailsText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
  explanationContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    gap: 10,
  },
});
export default Quiz;
