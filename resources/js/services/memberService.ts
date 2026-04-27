import { memberSeed } from '../data/memberSeed';
import type { Member } from '../types/member';

export const memberService = {
  async list(): Promise<Member[]> {
    return Promise.resolve(memberSeed);
  }
};
