export type MemberRole = 'owner' | 'editor' | 'viewer';

export type Member = {
  id: string;
  uid?: string;
  name: string;
  nickname?: string;
  role: MemberRole;
  avatarUrl?: string;
  color?: string;
  splitWeight: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};
