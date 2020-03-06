import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  const calculator = { total, next, operation };
  let buttonType = buttonName;
  if (buttonType === '=') {
    buttonType = operation;
  }
  if (buttonType === '+/-') {
    if (!calculator.next) {
      calculator.total = (-calculator.total).toString();
    } else if (calculator.next !== '0') {
      calculator.next = (-calculator.next).toString();
    }
  }
  if (buttonType === '+'
  || buttonType === '-'
|| buttonType === 'x'
|| buttonType === '÷'
|| buttonType === '%') {
    const result = operate(total, next, buttonType);
    calculator.total = result;
  }
  return calculator;
};

export default calculate;
