// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { quizSlice } from './quizSlice';

// Create and export the store
export const store = configureStore({
  reducer: {
    quiz: quizSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
