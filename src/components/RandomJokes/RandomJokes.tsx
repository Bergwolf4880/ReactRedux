import Button from "components/Button/Button"
import {
  ButtonContainer,
  JokeCard,
  JokeText,
  RandomJokeWrapper,
} from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  randomJokesActions,
  randomJokesSelectors,
} from "store/redux/randomJokes/randomJokesSlice"

function RandomJokes() {
  const dispatch = useAppDispatch()
  const { data, status, error } = useAppSelector(randomJokesSelectors.joke)

  const jokes = data.map(joke => {
    return (
      <JokeText key={joke.id}>
        {joke.question}:{joke.answer}
      </JokeText>
    )
  })

  const getJoke = () => {
    dispatch(randomJokesActions.getJoke())
  }
  return (
    <RandomJokeWrapper>
      <JokeCard>
        <ButtonContainer>
          <Button
            name="Get Joke"
            onButtonClick={getJoke}
            disabled={status === "loading"}
          />
        </ButtonContainer>
        {jokes}
      </JokeCard>
    </RandomJokeWrapper>
  )
}

export default RandomJokes
