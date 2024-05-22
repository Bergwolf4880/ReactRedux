import { ButtonComponent } from './styles';
import { ButtonProps } from './types';

function CounterButton({
  name,
  type = 'button',
  addToFavourites = false,
  onButtonClick,
}: ButtonProps) {
  
  return (
       <ButtonComponent type={type} addToFavourites={addToFavourites} onClick={onButtonClick}>
       {name}
      </ButtonComponent>

  );
}

export default CounterButton;
