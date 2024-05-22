import Input from "components/Input/Input"
import {
  InputButtonWrapper,
  SearchedWeatherContainer,
  WeatherButtonWrapper,
  WeatherForm,
  WeatherWrapper,
} from "./styles"
import Button from "components/Button/Button"
import { ChangeEvent, useState } from "react"
import WeatherInfo from "../components/WeatherInfo/WeatherInfo"

import Spinner from "components/Spinner/Spinner"
import WeatherError from "../components/WeatherError/WeatherError"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherAppSliceActions,
  weatherAppSliceSelectors,
} from "store/redux/weather/wetherAppSlice"
import CounterButton from "components/CounterButton/CounterButton"

function WeatherSearch() {
  const [city, setCity] = useState("")

  const dispatch = useAppDispatch()

  const { searchedLocations, isLoading, error } = useAppSelector(
    weatherAppSliceSelectors.weatherSearch,
  )
  const searchWeatherForLocation = () => {
    dispatch(weatherAppSliceActions.getWeather(city))
  }

  const onCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }
  const deleteAllLocation = () => {
    dispatch(weatherAppSliceActions.deleteAllQueries())
  }

  return (
    <WeatherWrapper>
      <WeatherForm>
        <InputButtonWrapper>
          <Input
            placeholder="Enter city name"
            onInputChange={onCityChange}
            value={city}
            name="city"
          />
          <WeatherButtonWrapper>
            <Button name="Search" onButtonClick={searchWeatherForLocation} />
                 
          </WeatherButtonWrapper>

        </InputButtonWrapper>
      </WeatherForm>
      {isLoading && <Spinner />}
      <SearchedWeatherContainer>
        <WeatherInfo />
      </SearchedWeatherContainer>
      {!error && <WeatherError error={error} />}
    </WeatherWrapper>
  )
}

export default WeatherSearch
