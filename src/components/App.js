import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    };
  }
    handleClick(buttonName){
      this.setState({total: 34})
    }


  render() {
    return (
      <div className="App">
        <Display result= {this.state.total} />
        <ButtonPanel clickHandler = {this.handleClick} />
      </div>
    );
  }
}


export default App;
