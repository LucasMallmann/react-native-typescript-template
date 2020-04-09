import React from 'react';
import { StatusBar } from 'react-native';

import Home from '~/Home';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#6874e8" barStyle="light-content" />
      <Home />
    </>
  );
};

export default App;
