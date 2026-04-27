import type { ExpenseCategory } from '../../types/expense';
import { expenseCategoryLabels } from '../../constants/categories';
import { Badge } from '../ui/Badge';

export const ExpenseCategoryBadge = ({ category }: { category: ExpenseCategory }) => (
  <Badge className="bg-korea-skySoft text-sky-700">{expenseCategoryLabels[category]}</Badge>
);
