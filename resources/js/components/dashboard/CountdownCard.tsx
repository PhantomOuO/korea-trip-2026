import type { Trip } from '../../types/trip';
import { diffDays } from '../../utils/date';
import { Card } from '../ui/Card';

export const CountdownCard = ({ trip }: { trip: Trip }) => {
  const today = new Date().toISOString().slice(0, 10);
  const untilStart = diffDays(today, trip.startDate);
  const untilEnd = diffDays(today, trip.endDate);

  let text = '旅行已完成，留下美好回憶';
  if (untilStart > 0) {
    text = `距離出發還有 ${untilStart} 天`;
  } else if (untilStart <= 0 && untilEnd >= 0) {
    text = `旅行進行中 第 ${Math.abs(untilStart) + 1} 天`;
  }

  return (
    <Card>
      <p className="text-sm font-semibold text-korea-ink">倒數狀態</p>
      <p className="mt-2 text-sm text-korea-muted">{text}</p>
    </Card>
  );
};
