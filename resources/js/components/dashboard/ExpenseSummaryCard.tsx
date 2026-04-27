import type { ExpenseItem } from '../../types/expense';
import { formatCurrency } from '../../utils/formatters';
import { Card } from '../ui/Card';

export const ExpenseSummaryCard = ({ expenses }: { expenses: ExpenseItem[] }) => {
  const totalTwd = expenses.reduce((sum, item) => sum + item.amountTwd, 0);
  const totalKrw = expenses
    .filter((item) => item.currency === 'KRW')
    .reduce((sum, item) => sum + item.amountOriginal, 0);

  return (
    <Card>
      <p className="text-sm font-semibold text-korea-ink">總支出摘要</p>
      <p className="mt-2 text-sm text-korea-muted">TWD：{formatCurrency(totalTwd, 'TWD')}</p>
      <p className="text-sm text-korea-muted">KRW：{formatCurrency(totalKrw, 'KRW')}</p>
    </Card>
  );
};
