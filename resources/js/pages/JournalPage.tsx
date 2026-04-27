import { JournalCard } from '../components/journal/JournalCard';
import { JournalForm } from '../components/journal/JournalForm';
import { useJournal } from '../hooks/useJournal';

export const JournalPage = () => {
  const { data } = useJournal();

  return (
    <div className="space-y-4">
      {data.map((entry) => (
        <JournalCard key={entry.id} entry={entry} />
      ))}
      <JournalForm />
    </div>
  );
};
