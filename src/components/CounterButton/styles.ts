import styled from '@emotion/styled';

interface ButtonComponentProps {
  disabled: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 50px;
  height: 50px;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 700;
  background: ${({ disabled }) =>
    disabled ? 'transparent' : 'rgb(90, 51, 161, 0.4)'};
  border: none;
  border-radius: 100px;
  color: #260c31;
  cursor: pointer;  
  justify-content: center;
  transition: ease-out 0.2s;
  
  &:hover {
    opacity: 1;
    transition: ease-in 0.2s;
    box-shadow: 0 0 10px #ac41ff;
  }
`;

