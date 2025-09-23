import type { FC } from 'react';
import { Link, type LinkProps } from 'react-router';
import { type ButtonProps, getButtonClasses } from '../utils/buttonHelpers';

interface Props extends ButtonProps, LinkProps {}

export const ButtonLink: FC<Props> = ({
  className,
  cta,
  secondary,
  tertiary,
  large,
  small,
  ...props
}) => {
  return (
    <Link
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
