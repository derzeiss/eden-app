import { ProfileShort } from './ProfileShort';

export interface Chat {
  user: ProfileShort;
  lastMsg: string;
  countUnread: number;
}
