import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  if (operation === '+') {
    return one.plus(two);
  } if (operation === '+') {
    return one.minus(two);
  } if (operation === 'x') {
    return one.times(two);
  } if (operation === '÷') {
    return one.div(two);
  } if (operation === '%') {
    return one.pow(2);
  }

  return null;
}

export default operate;
