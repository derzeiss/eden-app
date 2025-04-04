import { ComponentProps, FC } from 'react';
import { NavLink } from 'react-router-dom';
import { cx } from '../utils/cx';

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

export const NavDesktop: FC<ComponentProps<'ul'>> = (props) => {
  return (
    <ul {...props} className={cx(props.className, 'list-none')}>
      {routes.map((r) => (
        <li key={r.href}>
          <NavLink
            key={r.href}
            to={r.href}
            className="nav-btn flex items-center gap-2 rounded-lg p-4 transition-colors active:bg-neutral-100 active:transition-none"
          >
            <img src={`/icons/${r.icon}`} width="20" height="20" />
            <div className="text-xs">{r.label}</div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
