import { createAppSlice } from "store/createAppSlice"
import { DislikeStateSlice, LikeStateSlice } from "./types"

const likeInitialState = {
  likeCount: 0,
}
const dislikeInitialState = {
  dislikeCount: 0,
}

export const feedbackLikeSlice = createAppSlice({
  name: "FEEDBACK_LIKE",
  initialState: likeInitialState,
  reducers: create => ({
    addLike: create.reducer((state: LikeStateSlice) => {
      state.likeCount = state.likeCount + 1
    }),
  }),
    selectors: {
      count : ( state: LikeStateSlice) => state.likeCount
  },
})

export const feedbackDislikeSlice = createAppSlice({
    name: "FEEDBACK_DISLIKE",
    initialState: dislikeInitialState,
    reducers: create => ({
        addDislike: create.reducer((state: DislikeStateSlice) => {
            state.dislikeCount = state.dislikeCount + 1
        })
    }),
      selectors: {
        count : ( state: DislikeStateSlice) => state.dislikeCount
    },
  })
  
export const feedbackLikeActions = feedbackLikeSlice.actions;
export const feedbackLikeSelectors = feedbackLikeSlice.selectors;

export const feedbackDislikeActions = feedbackDislikeSlice.actions
export const feedbackDislikeSelectors = feedbackDislikeSlice.selectors;




