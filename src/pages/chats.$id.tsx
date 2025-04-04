import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_CHAT_MESSAGES } from '../_MOCK_data/MOCK_chat-messages';
import { MOCK_PROFILES_SHORT } from '../_MOCK_data/MOCK_profiles-short';
import { ChatMessageListItem } from '../components/ChatMessageListItem';
import { ChatMessage } from '../types/ChatMessage';
import { ProfileShort } from '../types/ProfileShort';

export const ChatsIdPage: FC = () => {
  const [me, setMe] = useState<ProfileShort | null>(null);
  const [friend, setFriend] = useState<ProfileShort | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const [msg, setMsg] = useState('');
  const [msgInputRows, setMsgInputRows] = useState(1);

  useEffect(() => {
    const matches = msg.match(/\n/g);
    if (!matches) return setMsgInputRows(1);
    const rows = Math.min(matches.length + 1, 3);
    setMsgInputRows(rows);
  }, [msg]);

  useEffect(() => {
    // fetch my and other users profile (maybe mine is in cookie or localStorage)
    setMe(MOCK_PROFILES_SHORT[1]);
    setFriend(MOCK_PROFILES_SHORT[0]);
  }, []);

  useEffect(() => {
    // fetch messages / connect to socket
    setMessages(MOCK_CHAT_MESSAGES);
  }, []);

  if (!me || !friend || !messages) {
    return <h1 className="text-xl font-bold">Lade Chat...</h1>;
  }

  return (
    <main className="-mt-8 flex flex-col justify-stretch">
      {/* chat header */}
      <div className="-mx-content sticky top-4 flex gap-4 border-b border-b-neutral-200 bg-white py-3">
        <Link
          to="/chats"
          className="flex w-11 items-center justify-center"
          aria-label="Go back to chats"
        >
          <img
            src="/icons/carbon_arrow-left.svg"
            alt="arrow left"
            width="24"
            height="24"
          />
        </Link>
        <Link to={`/users/${friend.id}`} className="flex gap-4">
          <img
            src={friend.img}
            className="h-12 w-12 rounded-full object-cover"
            width="48"
            height="48"
          />
          <div>
            <strong className="font-bold">{friend.name}</strong>
            <p className="text-sm text-neutral-500">
              Hier tippen für Kontaktinfo
            </p>
          </div>
        </Link>
      </div>

      {/* messages */}
      <ul className="flex grow flex-col gap-4 py-4">
        {messages.map((m) => (
          <ChatMessageListItem key={m.id} msg={m} fromMe={m.sender === me.id} />
        ))}
      </ul>

      {/* message input */}
      <footer className="md:-mx-content fixed bottom-0 left-0 z-40 flex w-full gap-2 border-t border-t-neutral-200 bg-white px-4 py-3 md:sticky md:w-auto">
        <textarea
          className="h-11 w-full resize-none rounded-3xl bg-neutral-100 px-4 py-[.625rem] focus:outline-2 focus:outline-purple-400"
          style={{ height: `${msgInputRows * 1.5 + 1.25}rem` }}
          placeholder="Nachricht..."
          value={msg}
          onChange={(ev) => setMsg(ev.target.value)}
        />
        <button
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-100 transition-colors active:bg-purple-400 active:transition-none"
          aria-label="send message"
        >
          <img
            src="/icons/carbon_send.svg"
            width="20"
            height="20"
            alt="paper plane icon"
          />
        </button>
      </footer>
    </main>
  );
};
