import Big from 'big'
const operate = (numberOne, numberTwo, operation) => {
  numberOne = Big(numberOne);
  numberTwo = Big(numberTwo);
  switch (operation) {
    case '+':
      return numberOne.plus(numberOne);
      break;
    case '-':
      return numberOne.minus(numberTwo);
      break;
    case 'x':
      return numberOne.times(numberTwo);
      break;
    case '÷':
      return numberOne.div(numberTwo);
      break;
    case '%':
        return numberOne.pow(2);
      break;
    default:

  }
}

export default operate;
