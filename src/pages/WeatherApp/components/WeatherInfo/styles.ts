import styled from "@emotion/styled"

export const WeatherInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SearchedWeatherContainer = styled.div`
  display: flex;
  /* justify-content: space-between;
  align-items: center; */
  gap: 20px;
  width: 100%;
  height: fit-content;
  padding: 28px 36px;
  background: linear-gradient(
    134deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(4px);
  border-radius: 20px;
`

export const WeatherButtonWrapper = styled.div`
  display: flex;
  gap:10px;
  position: absolute;
  top: 10px;
  right: 10px;
  width: auto;
`

export const WeatherInfoContainer = styled.div`
  display: flex;
  flex-direction: start;
  width: auto;
`

export const TempWrapper = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  font-size: 57px;
  color: white;
`

export const CityName = styled.p`
  display: flex;
  flex-direction: end;
  font-size: 18px;

`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`

export const WeatherImg = styled.img``
