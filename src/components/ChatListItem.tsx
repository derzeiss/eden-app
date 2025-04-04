import type { FC } from 'react';
import { Link } from 'react-router-dom';
import type { Chat } from '../types/Chat';

interface Props {
  chat: Chat;
}

export const ChatListItem: FC<Props> = ({ chat }) => {
  return (
    <li>
      <Link
        to={`/chats/${chat.user.id}`}
        className="flex gap-4 border-t border-t-neutral-200 py-3"
      >
        <img
          src={chat.user.img}
          className="h-12 w-12 rounded-full object-cover"
          width="48"
          height="48"
        />
        <div>
          <strong className="font-bold">{chat.user.name}</strong>
          <p className="line-clamp-2 text-neutral-500">{chat.lastMsg}</p>
        </div>
        {chat.countUnread > 0 && (
          <div className="flex h-6 w-6 shrink-0 items-center justify-center self-center rounded-full bg-red-400 text-xs font-bold text-white">
            {chat.countUnread}
          </div>
        )}
      </Link>
    </li>
  );
};
