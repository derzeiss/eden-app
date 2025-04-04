import { FC, useEffect, useState } from 'react';
import { MOCK_WORKSHOPS } from '../_MOCK_data/MOCK_workshops';
import { WorkshopListItem } from '../components/WorkshopListItem';
import { Workshop } from '../types/Workshop';

export const WorkshopPage: FC = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  useEffect(() => {
    // fetch workshops
    setWorkshops(MOCK_WORKSHOPS);
  }, []);

  return (
    <main>
      <h1 className="text-xl font-bold">Workshops</h1>
      <p className="mt-3">
        Wir lieben Wachstum. Deswegen bieten wir viele Workshops an. Melde dich
        jetzt an, bevor die Tickets weg sind!
      </p>

      <ul className="mt-8">
        {workshops.length > 0 &&
          workshops.map((w) => <WorkshopListItem key={w.id} workshop={w} />)}
      </ul>
    </main>
  );
};
