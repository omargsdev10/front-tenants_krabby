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

declare module 'mfe_shared/List' {
  import type { ReactNode, ComponentType } from 'react';

  export type ActionDef = {
    id: string;
    icon: ReactNode;
    label?: string;
    onClick: (item: Record<string, unknown>) => void;
  };

  export type FieldConfig = {
    image?: string;
    title: string;
    subtitle?: string;
  };

  export type ListProps = {
    title?: string;
    data: ({ id: string | number } & Record<string, unknown>)[];
    fields: FieldConfig;
    actions?: ActionDef[];
  };

  export function heartAction(onClick?: (item: Record<string, unknown>) => void): ActionDef;

  const List: ComponentType<ListProps>;
  export default List;
}

declare module "*.css";
declare module 'mfe_shared/styles';