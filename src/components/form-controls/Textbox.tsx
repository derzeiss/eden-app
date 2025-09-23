import type { ComponentProps, FC, ReactNode } from 'react';
import { cx } from '../../utils/cx';

interface Props extends ComponentProps<'input'> {
  label?: string;
  description?: ReactNode;
}

export const Textbox: FC<Props> = ({
  label,
  description,
  className,
  ...props
}) => {
  return (
    <label className="block">
      {label && <span className="mb-2 block text-sm font-bold">{label}</span>}
      <input
        className={cx(
          className,
          'block w-full rounded-lg bg-neutral-100 p-4 outline-0 focus:ring-2 focus:ring-purple-700',
        )}
        {...props}
      />
      {description && (
        <div className="mt-2 text-sm text-neutral-500">{description}</div>
      )}
    </label>
  );
};
