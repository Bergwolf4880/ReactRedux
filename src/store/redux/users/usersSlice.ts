import { createAppSlice } from "store/createAppSlice"
import { UserData, UsersSliceState } from "./types"
import { PayloadAction } from '@reduxjs/toolkit'

const usersInitialState: UsersSliceState = {
  users: [],
}

export const userSlice = createAppSlice({
  name: "USERS",
  initialState: usersInitialState,
    reducers: create => ({
        addUser: create.reducer((state: UsersSliceState, action: PayloadAction<UserData>) => {
            state.users = [...state.users, action.payload]
        }),
      deleteUserData: create.reducer((state: UsersSliceState) => {
        state.users = []
      })
    }),
    selectors: {
        users: (state:UsersSliceState) => state.users
    }
})

export const userSliceActions = userSlice.actions
export const userSliceSelectors = userSlice.selectors