import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Main from './components/MainComponent';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>

  );
}

export default App;
