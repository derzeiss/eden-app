import { Chat } from '../types/Chat';
import { MOCK_PROFILES_SHORT } from './MOCK_profiles-short';

export const MOCK_CHATS: Chat[] = [
  {
    user: MOCK_PROFILES_SHORT[0],
    lastMsg:
      'Poah ich sag’s dir hier brennt nicht nur mein Bizeps bei diesen heftigen Workshops. Meinst du, ich bin morgen wieder fit? ',
    countUnread: 2,
  },
  {
    user: MOCK_PROFILES_SHORT[1],
    lastMsg:
      'Poah ich sag’s dir hier brennt nicht nur mein Bizeps bei diesen heftigen Workshops. Meinst du, ich bin morgen wieder fit? ',
    countUnread: 0,
  },
  {
    user: MOCK_PROFILES_SHORT[2],
    lastMsg:
      'Poah ich sag’s dir hier brennt nicht nur mein Bizeps bei diesen heftigen Workshops. Meinst du, ich bin morgen wieder fit? ',
    countUnread: 10,
  },
];
