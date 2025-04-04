import { FC } from 'react';
import { Workshop } from '../types/Workshop';
import { ButtonLink } from './ButtonLink';

interface Props {
  workshop: Workshop;
}

export const WorkshopListItem: FC<Props> = ({ workshop }) => {
  return (
    <li className="list-none border-t border-t-neutral-200 pt-5 pb-10">
      <div className="font-bold">{workshop.title}</div>
      <small className="text-sm text-neutral-500">{workshop.author}</small>
      <div className="mt-3 flex items-center gap-4">
        <div className="relative h-2 w-full overflow-hidden rounded-full">
          <div className="bg-gradient-brand_flip absolute inset-0" />
          <div
            className="absolute inset-y-0 right-0 bg-neutral-100"
            style={{
              width: `${(100 * workshop.ticketsAvailable) / workshop.ticketsMax}%`,
            }}
          />
        </div>
        <small className="text-xs whitespace-nowrap text-neutral-500">
          {workshop.ticketsAvailable} von {workshop.ticketsMax} frei
        </small>
      </div>
      <p className="mt-6 line-clamp-4">
        <span className="text-xs font-bold tracking-wide uppercase">
          Abstract
        </span>{' '}
        {workshop.abstract}
      </p>

      <ButtonLink to={`/workshops/${workshop.id}`} className="mt-6" secondary>
        Infos & Anmeldung
      </ButtonLink>
    </li>
  );
};
