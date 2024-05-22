import { createAppSlice } from "store/createAppSlice"
import { RandomActivity, RandomActivitySliceState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"
import { v4 } from 'uuid'

const activityInitialState: RandomActivitySliceState = {
  activities: [],
  isLoading: false,
  error: undefined,
}

export const randomActivitySlice = createAppSlice({
  name: "ACTIVITIES",
  initialState: activityInitialState,
  reducers: create => ({
    getActivity: create.asyncThunk(
      async (arg, {rejectWithValue}) => {
        const response = await fetch("https://www.boredapi.com/api/activity")
        const result = await response.json()

        if (!response.ok) {
          return rejectWithValue(result)
        } else {
          return result
        }
      },
      {
        pending: (state: RandomActivitySliceState) => {
          state.isLoading = true;
          state.error = undefined
        },
        fulfilled: (state: RandomActivitySliceState, action: any) => {
          state.isLoading = false
          state.activities = [
            ...state.activities,
            {
              id: v4(),
              activity: action.payload.activity,
            } 
          ]
        },
        rejected: (state: RandomActivitySliceState, action: any) => {
          state.isLoading = false
            state.error = action.payload
        },
      },
    ),
    deleteAll: create.reducer(() => activityInitialState),
    deleteActivity: create.reducer(
      (state: RandomActivitySliceState, action: PayloadAction<string>) => {
        state.activities = state.activities.filter((activity : RandomActivity) => activity.id !== action.payload)
      })
  }),
  selectors: {
    activity: state => state,
  },
})

export const randomActivityActions = randomActivitySlice.actions
export const randomActivitySelectors = randomActivitySlice.selectors
