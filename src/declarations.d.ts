declare module 'mfe_shared/Button' {
  import { ComponentType } from 'react';
  interface ButtonProps {
    label: string;
    onClick?: () => void;
    style?: any;
  }
  const Button: ComponentType<ButtonProps>;
  export default Button;
}

declare module 'mfe_shared/MyButton' {
  import { ComponentType } from 'react';
  interface MyButtonProps {
    label: string;
    onClick?: () => void;
    style?: any;
  }
  const MyButton: ComponentType<MyButtonProps>;
  export default MyButton;
}

declare module "*.css";
declare module 'mfe_shared/styles';