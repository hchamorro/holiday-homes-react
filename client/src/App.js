import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Route exact path={['/']} component={Home}></Route>
      </Router>
    </>
  );
}

export default App;
