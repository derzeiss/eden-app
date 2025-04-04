import type { ComponentProps, FC } from 'react';
import { ButtonProps, getButtonClasses } from '../utils/buttonHelpers';

interface Props extends ButtonProps, ComponentProps<'button'> {}

export const Button: FC<Props> = ({
  className,
  secondary,
  tertiary,
  small,
  ...props
}) => {
  return (
    <button
      {...props}
      className={getButtonClasses(className, secondary, tertiary, small)}
    />
  );
};
