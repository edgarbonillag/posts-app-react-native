// REACT
import React from 'react';

// REDUX
import { Provider } from 'react-redux';
import store from './src/store';

// NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
