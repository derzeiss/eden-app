import { cx } from './cx';

export interface ButtonProps {
  cta?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  large?: boolean;
  small?: boolean;
}

export const getButtonClasses = (
  className?: string,
  cta?: boolean,
  secondary?: boolean,
  tertiary?: boolean,
  large?: boolean,
  small?: boolean,
) =>
  cx(
    className,
    'flex items-center justify-center rounded-full w-fit whitespace-nowrap font-bold cursor-pointer transition-colors active:transition-none',
    {
      // primary
      'text-white bg-purple-700 active:bg-purple-400':
        !cta && !secondary && !tertiary,
      // cta
      'text-white bg-gradient-brand': cta,
      // secondary
      'text-purple-700 inset-ring-2 hover:bg-purple-100 active:bg-purple-700 active:text-white':
        secondary,
      // tertiary
      'text-purple-700 hover:bg-purple-100 active:bg-purple-400': tertiary,
      // lg
      'px-7 py-3': large,
      // md
      'h-11 px-6 text-sm': !large && !small,
      // small
      'h-9 px-4 text-xs': small,
    },
  );
