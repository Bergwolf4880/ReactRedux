import { createAppSlice } from "store/createAppSlice"
import { RandomJokesSliceState } from './types'

const randomInitialState : RandomJokesSliceState = {
  data: [],
  status: "default",
  error: undefined,
}

export const randomJokeSlice = createAppSlice({
  name: "JOKES",
  initialState: randomInitialState,
  reducers: create => ({
    getJoke: create.asyncThunk(
      async (arg, thunkAPI) => {
        const response = await fetch(
          "https://official-joke-api.appspot.com/random_joke",
        )
        const result = await response.json()
        console.log("result", result)
        if (!response.ok) {
         return thunkAPI.rejectWithValue(result)
        } else {
          return result
        }
      },
      {
          pending: ( state: RandomJokesSliceState ) => {
              state.status = 'loading';
              state.error = undefined;
              console.log('pending');
        },
          fulfilled: ( state: RandomJokesSliceState, action : any ) => {
              state.status = 'success'
              state.data = [...state.data, {
                id: action.payload.id,
                question: action.payload.setup,
                answer: action.payload.punchline
              }]
        },
          rejected: ( state: RandomJokesSliceState, action : any ) => {
              state.status = 'error';
              state.error = action.payload;
        },
      },
    ),
  }),
  selectors: {
    joke: state => state,
  },
})

export const randomJokesActions = randomJokeSlice.actions
export const randomJokesSelectors = randomJokeSlice.selectors
