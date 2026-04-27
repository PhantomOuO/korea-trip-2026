import { ExpenseDashboard } from '../components/expense/ExpenseDashboard';
import { ExpenseForm } from '../components/expense/ExpenseForm';
import { ExpenseList } from '../components/expense/ExpenseList';
import { SplitSummary } from '../components/expense/SplitSummary';
import { useExpenses } from '../hooks/useExpenses';

export const ExpensePage = () => {
  const { data } = useExpenses();

  return (
    <div className="space-y-4">
      <ExpenseDashboard expenses={data} />
      <SplitSummary items={data} />
      <ExpenseList items={data} />
      <ExpenseForm />
    </div>
  );
};
