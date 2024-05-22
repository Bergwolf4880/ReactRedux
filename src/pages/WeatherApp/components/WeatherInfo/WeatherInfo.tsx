import { WeatherInfoProps } from "./types"
import {
  CityName,
  IconWrapper,
  TempWrapper,
  WeatherInfoContainer,
  WeatherInfoWrapper,
  WeatherImg,
  SearchedWeatherContainer,
  WeatherButtonWrapper,
} from "./styles"
import Button from "components/Button/Button"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherAppSliceActions,
  weatherAppSliceSelectors,
} from "store/redux/weather/wetherAppSlice"
import CounterButton from "components/CounterButton/CounterButton"

function WeatherInfo() {
  const dispatch = useAppDispatch()
  
  const { searchedLocations, isLoading, error } = useAppSelector(
    weatherAppSliceSelectors.weatherSearch,
  )

  const searchHistory = searchedLocations.map(query => {
    const removeSearchedLocation = () => {
      dispatch(weatherAppSliceActions.deleteLocation(query.id))
    }

    const saveLocation = () => {
      dispatch(weatherAppSliceActions.saveToFavourites(query))
    }

    return (
      <SearchedWeatherContainer key={query?.id}>
        <WeatherInfoContainer>
          <TempWrapper>
            {query?.temp}
            <CityName>{query?.cityName}</CityName>
          </TempWrapper>
        </WeatherInfoContainer>
        <IconWrapper>
            <WeatherImg src={query?.icon} alt="Weather Icon" />
          </IconWrapper>
        <WeatherButtonWrapper>
          <CounterButton
            name="✓"
            onButtonClick={saveLocation}
            addToFavourites = {true}
          />
          <CounterButton
            name="✕"
            onButtonClick={removeSearchedLocation}
          />
        </WeatherButtonWrapper>
      </SearchedWeatherContainer>
    )
  })

  return (<WeatherInfoWrapper>
    {searchHistory}
  </WeatherInfoWrapper>)
}

export default WeatherInfo
