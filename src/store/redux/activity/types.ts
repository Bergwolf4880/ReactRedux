export interface RandomActivity{
    id: string,
    activity: string,
    }

export interface RandomActivitySliceState{
    activities: RandomActivity[],
    isLoading: boolean
    error: any
}