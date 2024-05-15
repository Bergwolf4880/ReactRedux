import { CounterWrapper, ButtonControl, CounterValue } from "./styles"
import CounterButton from "components/CounterButton/CounterButton"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceSelectors,
  counterSliceActions,
} from "store/redux/counter/counterSlice"

function Counter() {
  //Вариант через Redux
  //8.
  const count = useAppSelector(counterSliceSelectors.count);
  //9.Создаём функцию, которая будет делать DISPATCH
  const dispatch = useAppDispatch();
  //10. Создаём функции, которые будут "диспачить" определённые ЭКШЕНЫ в ответ на действия ЭКШН креаторов(в этом компоненте это кнопки)
  const onPlus = () => {
    //11.Диспачим экшн, который отвечает за логику увеличения каунтера на +1
    dispatch(counterSliceActions.add())
  }
  const onMinus = () => {
    dispatch(counterSliceActions.minus())
  }
  const onDivide = () => {
    dispatch(counterSliceActions.divide())
  }
  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(5))
  }
  const onClear = () => {
    dispatch(counterSliceActions.clear())
  }

  return (
    <CounterWrapper>
      <CounterValue>{count}</CounterValue>
      <ButtonControl>
        <CounterButton onButtonClick={() => onPlus()} name="+" />
        <CounterButton onButtonClick={() => onMinus()} name="-" />
        <CounterButton onButtonClick={() => onMultiply()} name="×" />
        <CounterButton onButtonClick={() => onDivide()} name="÷" />
        <CounterButton onButtonClick={() => onClear()} name="C" />
      </ButtonControl>
    </CounterWrapper>
  )
};


export default Counter
