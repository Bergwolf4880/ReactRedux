import Input from "components/Input/Input"
import { API_KEY } from "./keys"
import {
  Header,
  LayoutWrapper,
  Main,
  StyledNavLink,
  WeatherAppName,
} from "./styles"
import Button from "components/Button/Button"
import { ChangeEvent, useState } from "react"
import WeatherInfo from "./components/WeatherInfo/WeatherInfo"
import { LayoutProps } from "./weatherTypes"
import Spinner from "components/Spinner/Spinner"
import WeatherError from "./components/WeatherError/WeatherError"

function WeatherLayout({ children }: LayoutProps) {
 
  return (
    <LayoutWrapper>
      <Header>
        <WeatherAppName>Weather App</WeatherAppName>
        <StyledNavLink
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
          to="/"
        >
          Home
        </StyledNavLink>
        <StyledNavLink
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
          to="/weathers"
        >
          Weathers
        </StyledNavLink>
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}
export default WeatherLayout
