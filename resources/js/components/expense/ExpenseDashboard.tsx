import type { ExpenseItem } from '../../types/expense';
import { formatCurrency } from '../../utils/formatters';
import { Card } from '../ui/Card';

export const ExpenseDashboard = ({ expenses }: { expenses: ExpenseItem[] }) => {
  const total = expenses.reduce((sum, item) => sum + item.amountTwd, 0);
  return (
    <Card>
      <h3 className="font-semibold">總支出 Dashboard</h3>
      <p className="mt-2 text-sm text-korea-muted">總計：{formatCurrency(total, 'TWD')}</p>
    </Card>
  );
};
