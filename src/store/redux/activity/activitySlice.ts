import { createAppSlice } from "store/createAppSlice"
import { RandomActivitySliceState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const activityInitialState: RandomActivitySliceState = {
  activities: [],
  status: "default",
  error: undefined,
}

export const randomActivitySlice = createAppSlice({
  name: "ACTIVITIES",
  initialState: activityInitialState,
  reducers: create => ({
    getActivity: create.asyncThunk(
      async (arg, thunkApi) => {
        const response = await fetch("https://www.boredapi.com/api/activity")
        const result = await response.json()

        if (!response.ok) {
          thunkApi.rejectWithValue(result)
        } else {
          return result
        }
      },
      {
        pending: (state: RandomActivitySliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: RandomActivitySliceState, action: any) => {
          state.status = "success"
          state.activities = [
            
            {
              key: action.payload.key,
              activity: action.payload.activity,
            }, ...state.activities
          ]
        },
        rejected: (state: RandomActivitySliceState, action: any) => {
          state.status = "error"
            state.error = action.payload
            alert("Network Error")
        },
      },
    ),
    deleteAll: create.reducer(() => activityInitialState),
    deleteActivity: create.reducer(
      (state: RandomActivitySliceState, action: PayloadAction<string>) => {
        state.activities = state.activities.filter((activity) => activity.key !== action.payload)
        console.log('action.payload',action.payload)
      })
  }),
  selectors: {
    activity: state => state,
  },
})

export const randomActivityActions = randomActivitySlice.actions
export const randomActivitySelectors = randomActivitySlice.selectors
