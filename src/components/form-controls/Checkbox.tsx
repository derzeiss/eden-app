import { type ComponentProps, type FC, type ReactNode } from 'react';
import { cx } from '../../utils/cx';

interface Props extends ComponentProps<'input'> {
  label: ReactNode;
  description?: ReactNode;
}

export const Checkbox: FC<Props> = ({
  label,
  description,
  className,
  ...props
}) => {
  return (
    <label
      className={cx(
        className,
        'checkbox relative block cursor-pointer pl-9 select-none',
      )}
    >
      <input
        {...props}
        className="pointer-events-none absolute opacity-0"
        type="checkbox"
      />
      {label && label}
      {description && (
        <div className="mt-2 text-sm text-neutral-500">{description}</div>
      )}
    </label>
  );
};
