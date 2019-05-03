import React from 'react';
import { StateProvider, initialState, reducer } from './state';

import Content from './components/Content/Content';

import './App.css';

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <Content />
      </div>
    </StateProvider>
  );
}

export default App;