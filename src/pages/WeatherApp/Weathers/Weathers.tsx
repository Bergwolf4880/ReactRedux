import { useAppDispatch, useAppSelector } from "store/hooks"
import { SavedWeatherWrapper, TextOutput, WeathersWrapper } from "./styles"
import {
  weatherAppSliceActions,
  weatherAppSliceSelectors,
} from "store/redux/weather/wetherAppSlice"

function Weathers() {
  const dispatch = useAppDispatch()

  const { savedLocations, isLoading, error } = useAppSelector(
    weatherAppSliceSelectors.weatherSearch,
    
  )
console.log('savedLocations',savedLocations)
  const searchHistory = savedLocations.map(query => {
    
    
    const removeSearchedLocation = () => {
      dispatch(weatherAppSliceActions.deleteLocation(query.id))

      return (
        <SavedWeatherWrapper key={query?.id}>
          <TextOutput>{query?.temp}</TextOutput>
          <TextOutput>{query?.cityName}</TextOutput>
        </SavedWeatherWrapper>
      )
    }
  })

  return (
    <WeathersWrapper>
    <>
      {searchHistory}
    </>   
    </WeathersWrapper>
  )
}

export default Weathers
