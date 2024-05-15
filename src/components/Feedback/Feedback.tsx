import { useAppDispatch, useAppSelector } from "store/hooks"

import {
  feedbackDislikeActions,
  feedbackDislikeSelectors,
  feedbackLikeActions,
  feedbackLikeSelectors,
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
  const likeCount = useAppSelector(feedbackLikeSelectors.count)
  const dislikeCount = useAppSelector(feedbackDislikeSelectors.count)

  const dispatch = useAppDispatch()

  const onLike = () => {
    dispatch(feedbackLikeActions.addLike())
  }
  const onDislike = () => {
    dispatch(feedbackDislikeActions.addDislike())
  }
  const onReset = () => {
    dispatch(feedbackLikeActions.resetFeedback())
    dispatch(feedbackDislikeActions.resetFeedback())
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
