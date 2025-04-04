import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { NavMobile } from './components/NavMobile';
import { NavDesktop } from './components/NavDesktop';

export const AppLayout: FC = () => {
  return (
    <>
      {/* decoration bar */}
      <div className="bg-gradient-brand fixed inset-x-0 top-0 z-10 h-4" />

      {/* desktop content grid */}
      <div className="content gap-content grid-cols-3 md:grid">
        <div>
          <NavDesktop className="sticky top-12 hidden md:block" />
        </div>
        <div className="col-span-2 pt-12 pb-16 md:pb-0">
          <Outlet />
        </div>
      </div>

      {/* mobile fixed nav */}
      <NavMobile />
    </>
  );
};
