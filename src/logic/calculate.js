import operate from './operate'

const calculate = ({total, next, operation}, buttonName) => {
  const calcutator = {total, next, operation}
  if(buttonName == '+/-'){
    calculate['total'] =  - calculate['total'];
    calculate['next'] = - calculate['next'];
  }
  if(buttonName == '+' ||
  buttonName == '-' ||
buttonName == 'x' ||
buttonName == '÷' ||
buttonName == '%'){
calcutator['total'] = operate(total = 0, next, buttonName)
}
return calcutator

}

export default calculate;
