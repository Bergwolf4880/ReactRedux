import styled from "@emotion/styled";

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;  
  width: 600px;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const SearchedWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:30px;
  width:100%;
`

export const WeatherForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  gap: 60px;
  margin-top: 100px;
`;

export const InputButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  gap: 12px;
`;

export const WeatherButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`;