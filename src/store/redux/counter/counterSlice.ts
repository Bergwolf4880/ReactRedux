import { createAppSlice } from "store/createAppSlice"
import { CounterStateSlice } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const conterInitialState = {
  count: 0,
}

//1. Создаём новый слайс для каунтера
export const counterSlice = createAppSlice({
  name: "COUNTER",
  initialState: conterInitialState,
  reducers: create => ({
    add: create.reducer((state: CounterStateSlice) => {
      state.count = state.count + 1
    }),
    minus: create.reducer((state: CounterStateSlice) => {
      state.count = state.count - 1
    }),
    divide: create.reducer((state: CounterStateSlice) => {
      state.count = Number((state.count / 2).toFixed(2))
    }),
    multiply: create.reducer(
      (state: CounterStateSlice, action: PayloadAction<number>) => {
        state.count = Number((state.count * action.payload).toFixed(2))
      },
    ),
    clear: create.reducer((state: CounterStateSlice) => {
      state.count = 0
    }),
  }),
  selectors: {
    count: (state: CounterStateSlice) => state.count,
  },
})

export const counterSliceActions = counterSlice.actions
export const counterSliceSelectors = counterSlice.selectors
