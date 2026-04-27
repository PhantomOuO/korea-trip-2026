export type JournalEntry = {
  id: string;
  tripId: string;
  date: string;
  title: string;
  content: string;
  imageUrls: string[];
  authorMemberId: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
};
