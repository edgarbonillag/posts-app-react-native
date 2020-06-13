// REACT
import React from 'react';

// NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
