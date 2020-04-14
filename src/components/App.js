import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  handleClick(buttonType) {
    const { total, next, operation } = calculate(this.state, buttonType);
    this.setState({
      total,
      next,
      operation,
    });
  }

  render() {
    const { total, next, operation } = this.state;


    return (
      <div className="App">
        <Display result={
        operation === null ? total : next
      }
        />
        {' '}
        <ButtonPanel clickHandler={
        this.handleClick
      }
        />
        {' '}

      </div>
    );
  }
}


export default App;
