import { createAppSlice } from "store/createAppSlice"
import { FeedbackStateSlice } from "./types"


const feedbackInitialState: FeedbackStateSlice = {
  likeCount: 0,
  dislikeCount: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    addDislike: create.reducer((state: FeedbackStateSlice) => {
      state.dislikeCount = state.dislikeCount + 1
    }),
    addLike: create.reducer((state: FeedbackStateSlice) => {
      state.likeCount = state.likeCount + 100000
    }),
    resetFeedback: create.reducer(() => feedbackInitialState),    
  }),
  selectors: {
    countLike: (state: FeedbackStateSlice) => state.likeCount,
    countDislike: (state: FeedbackStateSlice) => state.dislikeCount
  },  
})

export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors
