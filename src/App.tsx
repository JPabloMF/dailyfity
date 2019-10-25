import React from 'react';
import { Router } from "@reach/router";

/* Components */
import WeekRoutine from './screens/weekRoutine';

function App() {
  return (
    <Router>
      <WeekRoutine path="/" />
    </Router>
  );
}

export default App;
