import React, { useEffect } from 'react';
import { Router } from '@reach/router';

/* redux */
import { Provider } from 'react-redux';
import store from './store';

/* Components */
import WeekRoutine from './screens/weekRoutine';

/* DATA */
import { MOCKDATA } from './utils/mocks';

function App() {
  useEffect(()=>{
    if(!localStorage.getItem('data')){
      localStorage.setItem('data', JSON.stringify(MOCKDATA));
    }
  },[])

  return (
    <Provider store={store}>
      <Router>
        <WeekRoutine path="/" />
      </Router>
    </Provider>
  );
}

export default App;
