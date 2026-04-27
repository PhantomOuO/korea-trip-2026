import { formatMonthDay, formatWeekday } from '../../utils/date';
import { classNames } from '../../utils/classNames';

type Props = {
  dates: string[];
  activeDate: string;
  onSelect: (date: string) => void;
};

export const DateScroller = ({ dates, activeDate, onSelect }: Props) => (
  <div className="-mx-4 overflow-x-auto px-4 pb-1">
    <div className="flex w-max gap-2">
      {dates.map((date, index) => (
        <button
          key={date}
          onClick={() => onSelect(date)}
          type="button"
          className={classNames(
            'min-w-20 rounded-full px-3 py-2 text-left transition duration-150 active:scale-95',
            activeDate === date ? 'bg-korea-kimchi text-white' : 'bg-white text-korea-ink'
          )}
        >
          <p className="text-xs font-semibold">{formatMonthDay(date)}</p>
          <p className="text-[11px] opacity-85">Day {index + 1}</p>
          <p className="text-[11px] opacity-85">{formatWeekday(date)}</p>
        </button>
      ))}
    </div>
  </div>
);
