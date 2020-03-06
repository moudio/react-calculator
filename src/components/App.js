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
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    if (buttonName === 'AC') {
      this.setState({
        total: null,
        next: null,
        operation: null,
      });
    } else if (buttonName === '+/-') {
      const newState = calculate(this.state, buttonName);
      const newTotal = newState.total;
      const newNext = newState.next;
      this.setState({ total: newTotal, next: newNext });
    } else if (Number(buttonName) || Number(buttonName) === 0) {
      if (!operation) {
        if (total) {
          if (total === '0') {
            this.setState({
              total: buttonName,
            });
          } else {
            this.setState({
              total: total.concat(buttonName),
            });
          }
        } else {
          this.setState({
            total: buttonName,
          });
        }
      } else if (next) {
        this.setState({
          next: next.concat(buttonName),
        });
      } else {
        this.setState({
          next: buttonName,
        });
      }
    } else if (buttonName === '.') {
      if (!operation) {
        if (!(/\D/).test(total)) {
          this.setState({
            total: total.concat('.'),
          });
        }
      } else if (!(/\D/).test(next)) {
        this.setState({
          next: next.concat('.'),
        });
      }
    } else if (buttonName === '=') {
      if (total && next && operation) {
        const result = calculate(this.state, buttonName);
        const newTotal = result.total;
        this.setState({
          total: newTotal,
          next: null,
          operation: null,
        });
      }
    } else {
      this.setState({
        operation: buttonName,
      });
    }
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
