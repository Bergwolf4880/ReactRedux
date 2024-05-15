import { ChangeEvent } from 'react';


export interface InputProps {
  name?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  value?: string | number;
  error?: string | undefined
};
