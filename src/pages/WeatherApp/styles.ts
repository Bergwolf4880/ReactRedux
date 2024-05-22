import styled from "@emotion/styled";

import { WeatherBack } from "assets";
import { NavLink } from 'react-router-dom'

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: url(${WeatherBack});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 80px;
  gap:20px;
  padding: 25px;
  border-bottom: 1px #d2d2d2 solid;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    rgba(18, 45, 77, 0.5);
  backdrop-filter: blur(8px);
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const WeatherAppName = styled.div`
display: flex;
flex: 1;
`
export const StyledNavLink = styled(NavLink)`

`