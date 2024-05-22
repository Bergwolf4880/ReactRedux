import {
  InputComponentContainer,
  InputComponentLabel,
  InputComponent,
  ErrorMessage
} from './styles';
import { InputProps } from './types';

function Input({
  name,
  type = 'text',
  placeholder,
  onInputChange,
  value,
  checked,
  error
}: InputProps) {
  
  console.log('inputRender')
  
  return (
    <InputComponentContainer>
      <InputComponent
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
        value={value}
        checked={checked}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </InputComponentContainer>
  );
}

export default Input;

