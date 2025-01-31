import { store } from '@/src/redux/store';
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import { Provider } from 'react-redux';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: { fontSize: 16 },
          tabBarLabelPosition: 'beside-icon',
          tabBarActiveTintColor: '#1ea9e9',
        }}
      >
        <Tabs.Screen
          name="index" // Points to app/(tabs)/index.tsx (Quiz tab)
          options={{
            title: 'Quiz',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'comment-question' : 'comment-question-outline'}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="category" // Points to app/(tabs)/category.tsx (Category tab)
          options={{
            title: 'Category',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'book-open' : 'book-open-outline'}
                color={color}
                size={24}
              />
            ),
          }}
        />
      </Tabs>
    </Provider>
  );
}
