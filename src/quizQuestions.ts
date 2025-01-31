const allQuestions = [
  {
    field: 'React',
    type: 'Multiple Choice',
    questions: [
      {
        question: 'What is the difference between React.memo() and useMemo()?',
        options: [
          {
            option:
              'React.memo() is used to memoize components, while useMemo() is used to memoize values',
            explanation:
              'This is the correct answer. React.memo() is used to optimize re-renders of components, while useMemo() optimizes expensive calculations by memoizing values.',
            correctAnswer: true,
          },
          {
            option:
              'useMemo() is used to memoize components, while React.memo() is used to memoize values',
            explanation:
              'Incorrect. useMemo() is used for memoizing values, while React.memo() is used to memoize components.',
            correctAnswer: false,
          },
          {
            option: 'They are the same and can be used interchangeably',
            explanation:
              'Incorrect. They serve different purposes; React.memo() is for components and useMemo() is for values.',
            correctAnswer: false,
          },
          {
            option:
              'React.memo() is used for class components, while useMemo() is used for functional components',
            explanation:
              'Incorrect. Both React.memo() and useMemo() are used with functional components.',
            correctAnswer: false,
          },
        ],
      },
      {
        question:
          'How does React handle rendering optimizations for large lists?',
        options: [
          {
            option:
              'Using techniques like windowing or virtualization (e.g., React Window or React Virtualized)',
            explanation:
              'This is the correct answer. These techniques optimize rendering by only rendering items visible in the viewport, improving performance for large lists.',
            correctAnswer: true,
          },
          {
            option:
              'By rendering all items at once and relying on browser optimizations',
            explanation:
              'Incorrect. Rendering all items at once would be inefficient for large lists, leading to performance issues.',
            correctAnswer: false,
          },
          {
            option: 'By using CSS to hide off-screen items',
            explanation:
              'Incorrect. While CSS can hide elements, React optimizes rendering using techniques like virtualization, not just hiding off-screen items.',
            correctAnswer: false,
          },
          {
            option: 'React does not support optimizations for large lists',
            explanation:
              'Incorrect. React does provide optimizations for large lists through techniques like windowing and virtualization.',
            correctAnswer: false,
          },
        ],
      },
      {
        question:
          'What is the purpose of the `useReducer` hook, and when would you use it over `useState`?',
        options: [
          {
            option:
              'useReducer is used for managing complex state logic, especially when the next state depends on the previous state',
            explanation:
              'This is the correct answer. useReducer is useful for managing more complex state logic or when state updates depend on the previous state.',
            correctAnswer: true,
          },
          {
            option:
              'useReducer is used for simpler state management compared to useState',
            explanation:
              'Incorrect. useState is typically used for simpler state, while useReducer is for more complex logic.',
            correctAnswer: false,
          },
          {
            option: 'useReducer is used only for class components',
            explanation:
              'Incorrect. useReducer is used in functional components, just like useState.',
            correctAnswer: false,
          },
          {
            option: 'useReducer is used for handling side effects',
            explanation:
              'Incorrect. useReducer is for managing complex state, not for handling side effects.',
            correctAnswer: false,
          },
        ],
      },
      {
        question:
          'What is the difference between server-side rendering (SSR) and client-side rendering (CSR) in React?',
        options: [
          {
            option:
              'SSR renders the initial HTML on the server, while CSR renders everything in the browser',
            explanation:
              'This is the correct answer. SSR renders the HTML on the server and sends it to the client, while CSR handles rendering directly in the browser.',
            correctAnswer: true,
          },
          {
            option:
              'CSR renders the initial HTML on the server, while SSR renders everything in the browser',
            explanation:
              'Incorrect. SSR renders the HTML on the server, and CSR renders everything in the browser.',
            correctAnswer: false,
          },
          {
            option: 'SSR and CSR are the same',
            explanation:
              'Incorrect. SSR and CSR are different approaches to rendering React applications.',
            correctAnswer: false,
          },
          {
            option: 'SSR is used only for static websites',
            explanation:
              'Incorrect. SSR can be used for dynamic websites as well, not just static ones.',
            correctAnswer: false,
          },
        ],
      },
      {
        question: 'What are React Portals, and when would you use them?',
        options: [
          {
            option:
              'Portals allow rendering children into a DOM node outside the parent component’s DOM hierarchy, useful for modals or tooltips',
            explanation:
              'This is the correct answer. Portals are often used for rendering elements outside the regular DOM structure, like modals or tooltips.',
            correctAnswer: true,
          },
          {
            option: 'Portals are used for routing in React applications',
            explanation:
              'Incorrect. Portals are for rendering into different DOM nodes, not for routing.',
            correctAnswer: false,
          },
          {
            option: 'Portals are used for state management',
            explanation:
              'Incorrect. Portals are unrelated to state management. They are used for rendering children outside the regular DOM structure.',
            correctAnswer: false,
          },
          {
            option: 'Portals are used for handling side effects',
            explanation:
              'Incorrect. Portals are about rendering components into different DOM nodes, not about handling side effects.',
            correctAnswer: false,
          },
        ],
      },
      {
        question:
          'What is the purpose of the `useCallback` hook, and how does it improve performance?',
        options: [
          {
            option:
              'useCallback memoizes callback functions to prevent unnecessary re-renders of child components',
            explanation:
              'This is the correct answer. useCallback is used to prevent unnecessary re-renders by memoizing the functions passed as props.',
            correctAnswer: true,
          },
          {
            option:
              'useCallback is used to manage state in functional components',
            explanation:
              'Incorrect. useCallback does not manage state, it memoizes functions to avoid unnecessary re-renders.',
            correctAnswer: false,
          },
          {
            option: 'useCallback is used to handle side effects',
            explanation:
              'Incorrect. useCallback is not for handling side effects; it is for memoizing functions.',
            correctAnswer: false,
          },
          {
            option: 'useCallback is used to define class components',
            explanation:
              'Incorrect. useCallback is used in functional components, not for defining class components.',
            correctAnswer: false,
          },
        ],
      },
      {
        question: 'What is the Context API, and how does it differ from Redux?',
        options: [
          {
            option:
              'Context API is built into React for sharing state across components, while Redux is a third-party library with more advanced features like middleware and devtools',
            explanation:
              'This is the correct answer. Context API is simple and built into React, while Redux provides more advanced state management with middleware and devtools.',
            correctAnswer: true,
          },
          {
            option:
              'Redux is built into React, while Context API is a third-party library',
            explanation:
              'Incorrect. Context API is built into React, while Redux is a third-party library.',
            correctAnswer: false,
          },
          {
            option: 'Context API and Redux are the same',
            explanation:
              'Incorrect. While both are used for state management, they are different tools with different features and use cases.',
            correctAnswer: false,
          },
          {
            option: 'Context API is used only for class components',
            explanation:
              'Incorrect. Context API works with both class and functional components.',
            correctAnswer: false,
          },
        ],
      },
    ],
  },
  {
    field: 'React Hooks',
    type: 'Multiple Choice',
    questions: [
      {
        question:
          'What is the purpose of the `useEffect` hook in React, and how does it differ from `componentDidMount` and `componentDidUpdate` in class components?',
        options: [
          {
            option:
              'useEffect runs after every render by default, while componentDidMount and componentDidUpdate are lifecycle methods that run at specific points in the component lifecycle',
            explanation:
              'This is the correct answer. useEffect runs after every render unless specified otherwise, while componentDidMount and componentDidUpdate run at specific lifecycle stages.',
            correctAnswer: true,
          },
          {
            option:
              'useEffect runs before every render, while componentDidMount and componentDidUpdate run after every render',
            explanation:
              'Incorrect. useEffect runs after rendering, not before, while the other two methods run at specific lifecycle stages.',
            correctAnswer: false,
          },
          {
            option: 'useEffect is used for state management',
            explanation:
              'Incorrect. useEffect is used for side effects, not for managing state.',
            correctAnswer: false,
          },
          {
            option: 'useEffect is used only in class components',
            explanation:
              'Incorrect. useEffect is a hook used in functional components.',
            correctAnswer: false,
          },
        ],
      },
      {
        question: 'What are custom hooks in React?',
        options: [
          {
            option:
              'Custom hooks are JavaScript functions that can call other hooks and encapsulate reusable logic',
            explanation:
              'This is the correct answer. Custom hooks allow you to extract and reuse logic across components.',
            correctAnswer: true,
          },
          {
            option: 'Custom hooks are built-in hooks provided by React',
            explanation:
              'Incorrect. Custom hooks are user-defined functions that utilize built-in hooks.',
            correctAnswer: false,
          },
          {
            option: 'Custom hooks are used for managing global state',
            explanation:
              'Incorrect. Custom hooks can be used for various purposes, but they are not specifically for managing global state.',
            correctAnswer: false,
          },
          {
            option: 'Custom hooks can only be used in class components',
            explanation:
              'Incorrect. Custom hooks are designed for functional components.',
            correctAnswer: false,
          },
        ],
      },
    ],
  },
  {
    field: 'Redux',
    type: 'Multiple Choice',
    questions: [
      {
        question:
          'What is the purpose of the `createStore` function in Redux, and what are the key parameters it accepts?',
        options: [
          {
            option:
              'createStore initializes the Redux store with a reducer function, initial state, and optional middleware',
            explanation:
              'This is the correct answer. createStore sets up the Redux store with the provided reducer, initial state, and optional middleware.',
            correctAnswer: true,
          },
          {
            option:
              'createStore is used to create React components with built-in state management',
            explanation:
              'Incorrect. createStore is specific to Redux and is not used for creating React components.',
            correctAnswer: false,
          },
          {
            option: 'createStore is used to manage side effects in Redux',
            explanation:
              'Incorrect. createStore is for initializing the store, not for managing side effects.',
            correctAnswer: false,
          },
          {
            option: 'createStore does not accept any parameters',
            explanation:
              'Incorrect. createStore requires at least a reducer function as a parameter.',
            correctAnswer: false,
          },
        ],
      },
      {
        question: 'What is Redux, and why is it used in React applications?',
        options: [
          {
            option:
              'Redux is a state management library that helps manage application state in a predictable way',
            explanation:
              'This is the correct answer. Redux provides a centralized store for state management, making it easier to manage and debug application state.',
            correctAnswer: true,
          },
          {
            option:
              'Redux is a styling library for managing CSS in React applications',
            explanation:
              'Incorrect. Redux is not related to styling; it is focused on state management.',
            correctAnswer: false,
          },
          {
            option: 'Redux is used for routing in React applications',
            explanation:
              'Incorrect. Redux does not handle routing; it is used for managing application state.',
            correctAnswer: false,
          },
          {
            option: 'Redux is a built-in feature of React',
            explanation:
              'Incorrect. Redux is a separate library that can be integrated with React.',
            correctAnswer: false,
          },
        ],
      },
      {
        question:
          'What are the core principles of Redux, and how do they contribute to predictable state management?',
        options: [
          {
            option:
              'Single source of truth, state is read-only, and changes are made with pure functions (reducers)',
            explanation:
              'This is the correct answer. These principles ensure that the application state is predictable and manageable.',
            correctAnswer: true,
          },
          {
            option:
              'State can be mutated directly, and there are no restrictions on how to update the state',
            explanation:
              'Incorrect. Redux enforces immutability and requires actions to update the state.',
            correctAnswer: false,
          },
          {
            option: 'Redux uses local component state for all data management',
            explanation:
              'Incorrect. Redux centralizes application state in a single store.',
            correctAnswer: false,
          },
          {
            option: 'Redux does not require actions or reducers',
            explanation:
              'Incorrect. Actions and reducers are fundamental concepts in Redux.',
            correctAnswer: false,
          },
        ],
      },
      {
        question:
          'How do you connect a React component to the Redux store using the `connect` function?',
        options: [
          {
            option:
              'By defining mapStateToProps and mapDispatchToProps functions and passing them to connect',
            explanation:
              'This is the correct answer. mapStateToProps connects the component to the Redux state, while mapDispatchToProps connects it to actions.',
            correctAnswer: true,
          },
          {
            option:
              'By directly importing the Redux store and using it in the component',
            explanation:
              'Incorrect. Components should not directly interact with the store; they should use connect or hooks.',
            correctAnswer: false,
          },
          {
            option: 'By using the useReducer hook instead of connect',
            explanation:
              'Incorrect. useReducer is a React hook for local state management, not for connecting to Redux.',
            correctAnswer: false,
          },
          {
            option: 'By wrapping the component in a Provider component',
            explanation:
              'Incorrect. The Provider component makes the store available, but connect is used to connect components to the store.',
            correctAnswer: false,
          },
        ],
      },
      {
        question:
          'What is the purpose of middleware in Redux, and how does it enhance the store functionality?',
        options: [
          {
            option:
              'Middleware provides a way to extend Redux with custom functionality, such as logging, crash reporting, or handling asynchronous actions',
            explanation:
              'This is the correct answer. Middleware allows for side effects and enhances Redux functionality.',
            correctAnswer: true,
          },
          {
            option: 'Middleware is used to directly mutate the Redux state',
            explanation:
              'Incorrect. Middleware does not mutate state; it allows for side effects and custom behavior.',
            correctAnswer: false,
          },
          {
            option: 'Middleware is a built-in feature of Redux',
            explanation:
              'Incorrect. Middleware is an optional extension to Redux.',
            correctAnswer: false,
          },
          {
            option: 'Middleware is used for routing in Redux applications',
            explanation:
              'Incorrect. Middleware is not related to routing; it extends Redux functionality.',
            correctAnswer: false,
          },
        ],
      },
    ],
  },
];

export default allQuestions;
