// eslint-disable-next-line
import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  if (operation === '+') {
    return one.plus(two).toString();
  } if (operation === '-') {
    return one.minus(two).toString();
  } if (operation === 'x') {
    return one.times(two).toString();
  } if (operation === '÷') {
    return one.div(two).toString();
  } if (operation === '%') {
    return one.mod(2).toString();
  }

  return null;
}

export default operate;
