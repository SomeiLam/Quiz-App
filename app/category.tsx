import Quiz from '@/src/Quiz';
import {
  StyleSheet,
  ImageBackground,
  ScrollView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import allQuestions from '@/src/quizQuestions';
import { changeField, viewSummary } from '../src/redux/quizSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

export default function Category() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../assets/images/background2.png')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {allQuestions.map((item) => (
          <View style={styles.card} key={item.field}>
            <Text style={styles.nameText}>
              {item.field} ({item.type})
            </Text>

            <View style={styles.actionContainer}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(changeField(item.field));
                  router.push('/');
                }}
              >
                <Text style={styles.start}>Start Quiz</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dispatch(changeField(item.field));
                  dispatch(viewSummary());
                  router.push('/');
                }}
              >
                <Text style={styles.start}>View Summary</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingTop: Platform.OS === 'web' ? 50 : 100,
    flexDirection: 'row', // Flexbox for mobile
    flexWrap: 'wrap', // Allow wrapping of items to the next line
    justifyContent: 'space-around', // Space items evenly
    gap: 10,
  },
  card: {
    backgroundColor: '#2979aa58',
    borderColor: '#59a6cd79',
    borderWidth: 1,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 200,
    width: 300,
    margin: 5,
    gap: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  nameText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
  },
  typeText: {
    color: '#fff',
    fontSize: 16,
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  start: {
    color: '#125783',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
