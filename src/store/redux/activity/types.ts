export interface RandomActivity{
    key: string,
    activity: string,
    }

export interface RandomActivitySliceState{
    activities: RandomActivity[],
    status: 'default' | 'loading' | 'success' | 'error'
    error: any
}