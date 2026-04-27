import type { ExpenseItem } from '../../types/expense';

export const SplitSummary = ({ items }: { items: ExpenseItem[] }) => {
  const byMember = items.reduce<Record<string, number>>((acc, item) => {
    acc[item.paidByMemberId] = (acc[item.paidByMemberId] ?? 0) + item.amountTwd;
    return acc;
  }, {});

  return (
    <div className="rounded-4xl border border-korea-line bg-white p-4">
      <h3 className="text-sm font-semibold">付款人摘要</h3>
      <ul className="mt-2 space-y-1 text-sm text-korea-muted">
        {Object.entries(byMember).map(([memberId, amount]) => (
          <li key={memberId}>{memberId}：NT$ {amount.toFixed(0)}</li>
        ))}
      </ul>
    </div>
  );
};
