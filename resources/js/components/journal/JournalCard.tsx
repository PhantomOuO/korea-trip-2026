import type { JournalEntry } from '../../types/journal';
import { Card } from '../ui/Card';

export const JournalCard = ({ entry }: { entry: JournalEntry }) => (
  <Card variant="sticker">
    <p className="text-xs text-korea-muted">{entry.date}</p>
    <h3 className="mt-1 font-semibold">{entry.title}</h3>
    <p className="mt-2 text-sm text-korea-muted">{entry.content}</p>
  </Card>
);
