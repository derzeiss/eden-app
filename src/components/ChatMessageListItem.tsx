import { FC } from 'react';
import { ChatMessage } from '../types/ChatMessage';
import { cx } from '../utils/cx';

interface Props {
  msg: ChatMessage;
  fromMe: boolean;
}

export const ChatMessageListItem: FC<Props> = ({ msg, fromMe }) => {
  return (
    <li
      className={cx('-mx-1 flex md:mx-0', {
        'justify-start': !fromMe,
        'justify-end': fromMe,
      })}
    >
      <div
        className={cx(
          'max-w-80 rounded-xl px-4 py-3 md:max-w-96',
          { 'bg-purple-100': fromMe },
          { 'inset-ring inset-ring-neutral-100': !fromMe },
        )}
      >
        <p>{msg.payload}</p>
        <small className="float-right text-xs text-neutral-500">
          {msg.time}
        </small>
      </div>
    </li>
  );
};
