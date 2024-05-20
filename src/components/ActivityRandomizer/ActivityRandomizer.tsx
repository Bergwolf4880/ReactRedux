import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  ActivityContainer,
  ActivityText,
  ActivityWrapper,
  ActtivityRandomizerComponent,
} from "./styles"
import {
  randomActivityActions,
  randomActivitySelectors,
} from "store/redux/activity/activitySlice"
import CounterButton from "components/CounterButton/CounterButton"
import Button from "components/Button/Button"
import Spinner from 'components/Spinner/Spinner'

export const ActivityRandomizer = () => {
  const dispatch = useAppDispatch()

  const { activities, status, error } = useAppSelector(
    randomActivitySelectors.activity,
  )
console.log('activities',activities)
  const getRandomActivity = () => {
    dispatch(randomActivityActions.getActivity())
  }

  const activitiesMapped = activities.map(act => {
    const removeActivity = () => {
      dispatch(randomActivityActions.deleteActivity(act.key))
    }
    return (
      <ActivityContainer key={act.key}>
        <ActivityText>{act.activity}</ActivityText>
        <CounterButton name="×" onButtonClick={removeActivity}></CounterButton>
      </ActivityContainer>
    )
  })

  const deleteAllEntries = () => {
    dispatch(randomActivityActions.deleteAll())
  }

  return (
    <ActtivityRandomizerComponent>
      
      <Button
        name="Activity Randomizer"
        onButtonClick={getRandomActivity}
        disabled = {status === 'loading'}
      ></Button>
      <ActivityWrapper>{activitiesMapped}</ActivityWrapper>
      {status === 'loading' && <Spinner />}
      {activities.length !== 0 && <Button name="Delete all" onButtonClick={deleteAllEntries} />}
    </ActtivityRandomizerComponent>
  )
}
