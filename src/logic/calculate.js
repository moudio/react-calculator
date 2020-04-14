import operate from './operate';

const calculate = ({ total, next, operation }, buttonType) => {
  const calculator = { total, next, operation };

  if (buttonType === '+/-') {
    if (!calculator.next) {
      calculator.total = (-calculator.total).toString();
    } else if (calculator.next) {
      calculator.next = (-calculator.next).toString();
    }
    return calculator;
  }
  if (
    buttonType === '+'
    || buttonType === '-'
    || buttonType === 'x'
    || buttonType === '÷'
    || buttonType === '%'
  ) {
    if (calculator.next) {
      const result = operate(total, next, buttonType);
      calculator.total = result;
      return calculator;
    }
  }

  if (buttonType === 'AC') {
    calculator.total = '0';
    calculator.next = null;
    calculator.operation = null;
  } else if (Number(buttonType) || Number(buttonType) === 0) {
    if (!operation) {
      if (total) {
        if (total === '0') {
          calculator.total = buttonType;
          calculator.next = null;
        } else {
          calculator.total = total.concat(buttonType);
        }
      } else {
        calculator.total = buttonType;
      }
    } else if (next) {
      calculator.next = next.concat(buttonType);
    } else {
      calculator.next = buttonType;
    }
  } else if (buttonType === '.') {
    if (!operation) {
      if (!/\D/.test(total)) {
        calculator.total = total.concat('.');
      }
    } else if (!/\D/.test(next)) {
      calculator.next = next.concat('.');
    }
  } else if (buttonType === '=') {
    if (total && next && operation) {
      const result = calculate(calculator, operation);
      const newTotal = result.total;
      calculator.total = newTotal;
      calculator.next = null;
      calculator.operation = null;
    }
  } else {
    calculator.operation = buttonType;
  }

  return calculator;
};

export default calculate;
