import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import TechList from './components/TechList';

const App = () => {
  return (
    /*
    provider tags can only have 1 child
    Provider tags make react and redux play nice
    */
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText='Tech Stack' />
        <TechList />
      </View>
    </Provider>
  );
};

export default App;
