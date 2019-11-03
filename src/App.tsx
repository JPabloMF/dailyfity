import React from 'react';
import { Router } from '@reach/router';

/* redux */
import { Provider } from 'react-redux';
import store from './store';

/* Components */
import WeekRoutine from './screens/weekRoutine';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <WeekRoutine path="/" />
      </Router>
    </Provider>
  );
}

export default App;
