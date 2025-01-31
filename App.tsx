import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import { store } from './src/redux/store';
import Quiz from './src/Quiz';

export default function App() {
  return (
    <Provider store={store}>
      <Quiz />
    </Provider>
  );
}
