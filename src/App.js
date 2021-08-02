import './App.css';
import React from 'react';
import TranslateMenu from './components/menu';

function App() {
  return (
    <div className="App">
      <header>
        Language Translator
        <TranslateMenu/>
      </header>
    </div>
  );
}

export default App;
