import { cx } from './cx';

export interface ButtonProps {
  secondary?: boolean;
  tertiary?: boolean;
  small?: boolean;
}

export const getButtonClasses = (
  className?: string,
  secondary?: boolean,
  tertiary?: boolean,
  small?: boolean,
) =>
  cx(
    className,
    'flex items-center rounded-full w-fit whitespace-nowrap font-bold transition-colors active:transition-none',
    {
      // primary
      'text-white bg-purple-700': !secondary && !tertiary,
      // secondary
      'text-purple-700 inset-ring-2 hover:bg-purple-100 active:bg-purple-700 active:text-white':
        secondary,
      // tertiary
      'text-purple-700': tertiary,
      // md
      'h-11 px-6 text-sm': !small,
      // small
      'h-9 px-4 text-xs': small,
    },
  );
