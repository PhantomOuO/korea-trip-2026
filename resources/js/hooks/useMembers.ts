import { useCallback } from 'react';
import { memberSeed } from '../data/memberSeed';
import { memberService } from '../services/memberService';
import type { Member } from '../types/member';
import { useAsyncData } from './useAsyncData';

export const useMembers = () => {
  const loader = useCallback(() => memberService.list(), []);
  return useAsyncData<Member[]>(loader, memberSeed);
};
