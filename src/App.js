import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';


import { Container } from 'semantic-ui-react'

import Index from './views/index';
import Normal from './views/normal';
import Preferencial from './views/preferencial';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container>
        <Route path="/" exact component={Index} />
        <Route path="/preferencial/" component={Preferencial} />
        <Route path="/normal/" component={Normal} />
      </Container>
    </Router>
  );
}

export default App;