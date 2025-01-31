import { QuizState } from '@/src/redux/quizSlice';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { previousQuestion, nextQuestion } from './redux/quizSlice';

const QuizDetails = () => {
  const { questions, currentQuestionIndex } = useSelector(
    (state: { quiz: QuizState }) => state.quiz
  );

  const dispatch = useDispatch();

  return (
    <View style={styles.detailsContainer}>
      <Button
        buttonStyle={{ backgroundColor: 'transparent' }}
        disabledStyle={{ backgroundColor: 'transparent' }}
        icon={
          <Icon
            name="angle-left"
            size={20}
            color={currentQuestionIndex === 0 ? 'grey' : 'black'}
            style={{ backgroundColor: 'transparent' }}
          />
        }
        onPress={() => dispatch(previousQuestion())}
        disabled={currentQuestionIndex === 0}
      />
      <Text style={styles.detailsText} testID="currentQuestion">
        Question {currentQuestionIndex + 1} / {questions.length}
      </Text>
      <Button
        buttonStyle={{ backgroundColor: 'transparent' }}
        disabledStyle={{ backgroundColor: 'transparent' }}
        icon={
          <Icon
            name="angle-right"
            size={20}
            color={
              currentQuestionIndex === questions.length - 1 ? 'grey' : 'black'
            }
          />
        }
        disabled={currentQuestionIndex === questions.length - 1}
        onPress={() => dispatch(nextQuestion())}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    marginBottom: 20,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#c1c1c117',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.5,
    elevation: 5,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  detailsText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
});

export default QuizDetails;
