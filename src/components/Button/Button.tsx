import { ButtonComponent } from './styles';
import { ButtonProps } from './types';

function CounterButton({
  name,
  type = 'button',
  disabled = false,
  onButtonClick,
}: ButtonProps) {
  
  return (
       <ButtonComponent type={type} disabled={disabled} onClick={onButtonClick}>
        {name}
      </ButtonComponent>

  );
}

export default CounterButton;
