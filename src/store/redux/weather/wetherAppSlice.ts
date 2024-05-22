import { createAppSlice } from 'store/createAppSlice'
import { LocationSearchQuery, weatherInitialStateSlice } from './types'
import { v4 } from 'uuid'
import { PayloadAction } from '@reduxjs/toolkit'

const weatherInitialState : weatherInitialStateSlice = {
    searchedLocations: [],
    savedLocations: [],
    isLoading: false,
    error: []
}


export const WeatherAppSlice = createAppSlice({
    name: "WEATHER_APP",
    initialState: weatherInitialState,
    reducers: create => ({
        getWeather: create.asyncThunk(
            async (arg: string , { rejectWithValue }) => {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${arg}&appid=5d20c7e698d3f47c06fc0fe353603c03&&units=metric`)
                const result = await response.json()
                
                if (!response.ok) {
                    return rejectWithValue(result);
                } else {
                    return result;
                }
            },
            {
                pending: (state: weatherInitialStateSlice) => {
                    state.isLoading = true;
                    state.error = [];

                },
                fulfilled: (state: weatherInitialStateSlice, action: any) => {
                    state.isLoading = false;
                    state.searchedLocations = [
                        {
                        id: v4(),
                        temp: action.payload.main.temp,
                        icon: `http://openweathermap.org/img/w/${action.payload.weather[0].icon}.png`,
                        cityName: action.payload.name
                    }, ...state.searchedLocations]
                },
                rejected: (state: weatherInitialStateSlice, action: any) => {
                    state.isLoading = false
                    state.error = [{
                        code: action.payload?.cod,
                        message: action.payload?.message
                    }]
                },
            },
        ),
        deleteAllQueries: create.reducer(() => weatherInitialState),
        deleteLocation: create.reducer((state: weatherInitialStateSlice, action: PayloadAction<string>) => {
            state.searchedLocations = state.searchedLocations.filter((location : LocationSearchQuery) => location.id !== action.payload)
        }),
        saveToFavourites: create.reducer((state: weatherInitialStateSlice, action: PayloadAction<LocationSearchQuery>) => {
            state.savedLocations = [...state.savedLocations, action.payload]})        
    }),
    selectors: {
        weatherSearch: state => state,
    }

})

export const weatherAppSliceActions = WeatherAppSlice.actions
export const weatherAppSliceSelectors = WeatherAppSlice.selectors
