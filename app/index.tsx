import Quiz from '@/src/Quiz';
import { SafeAreaView, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Quiz />
    </View>
  );
}
