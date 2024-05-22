

export interface weatherInitialStateSlice {
    searchedLocations: LocationSearchQuery[],
    savedLocations: LocationSearchQuery[],
    isLoading: boolean,
    error: ErrorData[]
}
export interface LocationSearchQuery {
    id: string,
    temp: string,
    icon: string,
    cityName: string;
}
export interface ErrorData {
    code: string,
    message: string
}
