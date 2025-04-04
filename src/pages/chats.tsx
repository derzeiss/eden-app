import { FC } from 'react';
import { MOCK_CHATS } from '../_MOCK_data/MOCK_chats';
import { ButtonLink } from '../components/ButtonLink';
import { ChatListItem } from '../components/ChatListItem';

export const ChatsPage: FC = () => {
  return (
    <main>
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-xl font-bold">Chat</h1>
        <ButtonLink to="/chats/new" secondary small>
          Neuer Chat
        </ButtonLink>
      </div>
      <ul className="mt-4">
        {MOCK_CHATS.map((c) => (
          <ChatListItem key={c.user.id} chat={c} />
        ))}
      </ul>
    </main>
  );
};
