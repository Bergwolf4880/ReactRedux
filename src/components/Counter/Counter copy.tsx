import { CounterWrapper, ButtonControl, CounterValue } from './styles';
import CounterButton from 'components/CounterButton/CounterButton';
import { useState } from 'react'



function Counter() {

  //Вариант контроля компонента через локальное хранилище
    const [ value, setValue ] = useState<number>(0)
    let roundedCount = Math.round(value * 100) / 100;
 
    const onOperationClick = (operator: Operator) => {
      switch (operator) {
        case '*':
          setValue(prevValue => prevValue * 2);
          break;
        case '/':
          setValue(prevValue => prevValue / 2);
          break;
        case '+':
          setValue(prevValue => prevValue + 1);
          break;
        case '-':
          setValue(prevValue => prevValue - 1);
          break;
        case 'c':
          setValue(0);
          break;
        default:
          console.error('Invalid operator');
      }
  }
    
  
    return (
      <CounterWrapper>
        <CounterValue>{roundedCount}</CounterValue>
        <ButtonControl>
          <CounterButton onButtonClick={() => onOperationClick("+")} name="+" />
          <CounterButton onButtonClick={() => onOperationClick("-")} name="-" />
          <CounterButton onButtonClick={() => onOperationClick("*")}
            disabled={value === 0}
            name="×" />
          <CounterButton onButtonClick={() => onOperationClick("/")}
            disabled={value === 0}
            name="÷" />
          <CounterButton
            onButtonClick={() => onOperationClick("c")}
            disabled = {value === 0}
            name="C"
          />
        </ButtonControl>
      </CounterWrapper>
    )
}

export default Counter;