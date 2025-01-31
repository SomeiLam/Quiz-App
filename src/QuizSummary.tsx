import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { Question } from './redux/quizSlice';

interface QuizSummaryProps {
  questions: Question[];
}

const QuizSummary: React.FC<QuizSummaryProps> = ({ questions }) => {
  const router = useRouter();

  const handleNavigateToCategory = () => {
    router.push('/category');
  };

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {questions?.map((q, index) => {
            const correctOption = q.options.find((o) => o.correctAnswer);
            return (
              <View key={index} style={styles.questionContainer}>
                <Text style={styles.question}>{q.question}</Text>
                <Text style={styles.answer}>{correctOption?.option}</Text>
                <Text style={styles.explanation}>
                  Explanation:{' '}
                  {correctOption?.explanation.slice(
                    28,
                    correctOption?.explanation.length
                  )}
                </Text>
              </View>
            );
          })}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleNavigateToCategory}>
              <Text style={{ color: '#07135c', fontSize: 18 }}>
                Select quiz
              </Text>
            </TouchableOpacity>
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
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: '95%',
    marginBottom: 20,
  },
  questionContainer: {
    margin: 10,
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#a4a4a4',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  answer: {
    fontSize: 16,
    color: '#11658b',
  },
  explanation: {
    fontSize: 14,
    color: 'gray',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 15,
  },
});

export default QuizSummary;
