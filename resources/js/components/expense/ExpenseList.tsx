import type { ExpenseItem } from '../../types/expense';
import { formatCurrency } from '../../utils/formatters';
import { Card } from '../ui/Card';
import { ExpenseCategoryBadge } from './ExpenseCategoryBadge';

export const ExpenseList = ({ items }: { items: ExpenseItem[] }) => (
  <div className="space-y-3">
    {items.map((item) => (
      <Card key={item.id}>
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm text-korea-muted">{item.date} · {item.currency} {item.amountOriginal}</p>
            <p className="mt-1 text-sm">{formatCurrency(item.amountTwd, 'TWD')}</p>
          </div>
          <ExpenseCategoryBadge category={item.category} />
        </div>
      </Card>
    ))}
  </div>
);
