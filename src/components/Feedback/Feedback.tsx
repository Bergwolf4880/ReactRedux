import { useAppDispatch, useAppSelector } from "store/hooks"

import {
  feedbackSliceActions,
  feedbackSliceSelectors
  } from "store/redux/feedback/feedbackSlice"

import {
  DislikeIcon,
  FeedbackContainer,
  IconContainer,
  LikeDislikeContainer,
  LikeIcon,
  ResetIcon,
  Result,
} from "./styles"

function Feedback() {

  const likeCount = useAppSelector(feedbackSliceSelectors.countLike);
  const dislikeCount = useAppSelector(feedbackSliceSelectors.countDislike);

  const dispatch = useAppDispatch();
  



  const onLike = () => {
    dispatch(feedbackSliceActions.addLike())
  }
  const onDislike = () => {
    dispatch(feedbackSliceActions.addDislike())
  }
  const onReset = () => {
    dispatch(feedbackSliceActions.resetFeedback())
    dispatch(feedbackSliceActions.resetFeedback())
  }

  return (
    <FeedbackContainer>
      <LikeDislikeContainer>
        <Result>{likeCount}</Result>
        <IconContainer>
          <LikeIcon onClick={onLike} />
        </IconContainer>
      </LikeDislikeContainer>
      <LikeDislikeContainer>
        <Result>{dislikeCount}</Result>
        <IconContainer>
          <DislikeIcon onClick={onDislike} />
        </IconContainer>
      </LikeDislikeContainer>
      <LikeDislikeContainer>
        <IconContainer>
          <ResetIcon onClick={onReset} />
        </IconContainer>
      </LikeDislikeContainer>
    </FeedbackContainer>
  )
}

export default Feedback
