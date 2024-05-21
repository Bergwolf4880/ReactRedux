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
import { useEffect } from 'react'

export const ActivityRandomizer = () => {
  const dispatch = useAppDispatch()

  const { activities, isLoading, error } = useAppSelector(
    randomActivitySelectors.activity,
  )
  const getRandomActivity = () => {
    dispatch(randomActivityActions.getActivity())
  }

  useEffect(() => {
    if (error) {
     alert('Missing network connection') 
    }    
  },[error])


  const activitiesMapped = activities.map((act, index) => {
    const removeActivity = () => {
      dispatch(randomActivityActions.deleteActivity(act.id))
    }
    return (
      <ActivityContainer key={act.id}>
        <ActivityText>{`${index+1}. ${act.activity}`}</ActivityText>
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
        disabled = {isLoading}
      ></Button>
      <ActivityWrapper>{activitiesMapped}</ActivityWrapper>
      {isLoading && <Spinner />}
      {activities.length !== 0 && <Button name="Delete all" onButtonClick={deleteAllEntries} />}
    </ActtivityRandomizerComponent>
  )
}
