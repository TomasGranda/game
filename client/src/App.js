import React from 'react';
import { initialState, combineReducers } from './state';
import StateProvider from './components/StateProvider/StateProvider'

import Content from './components/Content/Content';

import './App.css';

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={combineReducers}>
      <div className="App">
        <Content />
      </div>
    </StateProvider>
  );
}

export default App;