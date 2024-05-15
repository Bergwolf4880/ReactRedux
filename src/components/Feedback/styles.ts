import styled from "@emotion/styled"
import { Like, Dislike, Reset } from "assets"

export const FeedbackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110%;
  height: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 5px;
  background: linear-gradient(#eea849, #f56b46);
  box-shadow:
    0 0 10px #ff9f48,
    0 0 10px rgba(0, 0, 0, 0.5);
`
export const LikeDislikeContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 60px;
  padding: 10px;
  border-radius: 30px;
  box-shadow: 3px 7px 5.5px #a74121;
  background: linear-gradient(#ee9529, #f45f31);
  transition: ease-out 0.3s;
  &:hover {
    opacity: 0.7;
    transition: ease-in 0.3s;
    box-shadow: -3px 0 10px transparent;
  }
`

export const Result = styled.div`
  font: bold 30px/1.5 Arial;
`
export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
`

export const LikeIcon = styled.img`
  width: 100%;
  height: 100%;
`
LikeIcon.defaultProps = { src: Like }

export const DislikeIcon = styled.img`
  width: 100%;
  height: 100%;
`
DislikeIcon.defaultProps = { src: Dislike }

export const ResetIcon = styled.img`
  width: 100%;
  height: 100%;
`
ResetIcon.defaultProps = { src: Reset }
