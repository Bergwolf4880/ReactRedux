import { useAppDispatch, useAppSelector } from 'store/hooks'
import { FeedbackContainer, FeedbackResultContainer, LikeDislikeContainer, Result } from './styles';
import Button from 'components/Button/Button';
import { feedbackDislikeActions, feedbackDislikeSelectors, feedbackLikeActions, feedbackLikeSelectors } from 'store/redux/feedback/feedbackSlice'


function Feedback() {

    const likeCount = useAppSelector(feedbackLikeSelectors.count);
    const dislikeCount = useAppSelector(feedbackDislikeSelectors.count);

    const dispatch = useAppDispatch();
    
    const onLike = () => {
        dispatch(feedbackLikeActions.addLike())
    }
    const onDislike = () => {
        dispatch(feedbackDislikeActions.addDislike())
    }
    
    return (
        <FeedbackContainer>
            <FeedbackResultContainer>
                <LikeDislikeContainer>
                    <Button name="Like" onButtonClick={onLike} />
                    <Result>{likeCount}</Result>
                </LikeDislikeContainer>
                <LikeDislikeContainer>
                    <Button name="Dislike" onButtonClick={onDislike} />
                    <Result>{dislikeCount}</Result>
                </LikeDislikeContainer>
            </FeedbackResultContainer>
            {/* <Button name="Reset Results" onButtonClick={resetResults} /> */}
        </FeedbackContainer>
    )
}

export default Feedback;