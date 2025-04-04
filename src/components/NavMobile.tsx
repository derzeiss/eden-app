import { NavLink } from 'react-router-dom';

// Not sharing these with desktop nav as we'll have to inline them once we want the red notification bubble for chats
const routes = [
  {
    href: '/vor-ort',
    icon: 'carbon_location.svg',
    label: 'Vor Ort',
  },
  {
    href: '/workshops',
    icon: 'carbon_cognitive.svg',
    label: 'Workshops',
  },
  {
    href: '/connect',
    icon: 'carbon_collaborate.svg',
    label: 'Connect',
  },
  {
    href: '/chats',
    icon: 'carbon_chat.svg',
    label: 'Chat',
  },
  {
    href: '/profile',
    icon: 'carbon_user-avatar.svg',
    label: 'Profil',
  },
];

export const NavMobile = () => {
  return (
    <ul className="fixed bottom-0 left-0 z-30 grid w-full grid-cols-5 border-t border-t-neutral-200 bg-white md:hidden">
      {routes.map((r) => (
        <li key={r.href}>
          <NavLink
            to={r.href}
            className="nav-btn flex flex-col items-center gap-2 py-3 transition-colors active:bg-neutral-200 active:transition-none"
          >
            <img src={`/icons/${r.icon}`} width="20" height="20" />
            <div className="text-xs">{r.label}</div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
