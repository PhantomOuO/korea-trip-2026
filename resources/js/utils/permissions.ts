import type { MemberRole } from '../types/member';

export const canEdit = (role: MemberRole): boolean => role === 'owner' || role === 'editor';

export const canDelete = (role: MemberRole): boolean => role === 'owner';
