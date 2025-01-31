import Quiz from '@/src/Quiz';
import {
  StyleSheet,
  ImageBackground,
  ScrollView,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import allQuestions from '@/src/quizQuestions';
import { changeField } from '../src/redux/quizSlice';
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
          <TouchableOpacity
            key={item.field}
            style={styles.item}
            onPress={() => {
              dispatch(changeField(item.field));
              router.push('/');
            }}
          >
            <Text style={styles.nameText}>{item.field}</Text>
            <Text style={styles.typeText}>({item.type})</Text>
          </TouchableOpacity>
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
  item: {
    backgroundColor: '#2979aa58',
    borderColor: '#59a6cd79',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    height: 100, // Adjust item height as needed
    // Dynamic width based on platform
    width: 300,
  },
  nameText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  typeText: {
    color: '#fff',
    fontSize: 16,
  },
});
