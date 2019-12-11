import React, {Fragment} from 'react';
import 'semantic-ui-css/semantic.min.css';

import Header from './components/header';
import Tab from './components/tab';
import List from './components/list';

function App() {
  return (
    <Fragment>
      <Header />
      <Tab />
      <List />
    </Fragment>
  );
}

export default App;
