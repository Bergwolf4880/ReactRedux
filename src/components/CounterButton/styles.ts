import styled from '@emotion/styled';

interface ButtonComponentProps {
  addToFavourites: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 30px;
  height: 30px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 900;
  color: ${({ addToFavourites }) =>
        addToFavourites ? 'green' : 'red'};
  border: none;
  border-radius: 30px;
    cursor: pointer;  
  justify-content: center;
  align-items: center;
  transition: ease-out 0.2s;
  opacity: 0.6;
  &:hover {
    opacity: 1;
    transition: ease-in 0.2s;
    
  }
`;

