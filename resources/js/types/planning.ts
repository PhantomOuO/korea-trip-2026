export type PlanningItemType = 'todo' | 'luggage' | 'shopping';

export type PlanningItem = {
  id: string;
  tripId: string;
  type: PlanningItemType;
  title: string;
  assignedToMemberIds: string[];
  isDone: boolean;
  dueDate?: string;
  note?: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
};
