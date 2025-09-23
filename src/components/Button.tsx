import type { ComponentProps, FC } from 'react';
import { type ButtonProps, getButtonClasses } from '../utils/buttonHelpers';

interface Props extends ButtonProps, ComponentProps<'button'> {}

export const Button: FC<Props> = ({
  className,
  cta,
  secondary,
  tertiary,
  large,
  small,
  ...props
}) => {
  return (
    <button
      {...props}
      className={getButtonClasses(
        className,
        cta,
        secondary,
        tertiary,
        large,
        small,
      )}
    />
  );
};
