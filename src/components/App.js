import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
/* eslint-disable */
import calculate from '../logic/calculate';
/* eslint-enable */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Display result="0" />
        <ButtonPanel />
      </div>
    );
  }
}


export default App;
