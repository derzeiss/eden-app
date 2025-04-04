import type { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { ButtonProps, getButtonClasses } from '../utils/buttonHelpers';

interface Props extends ButtonProps, LinkProps {}

export const ButtonLink: FC<Props> = ({
  className,
  secondary,
  tertiary,
  small,
  ...props
}) => {
  return (
    <Link
      {...props}
      className={getButtonClasses(className, secondary, tertiary, small)}
    />
  );
};
