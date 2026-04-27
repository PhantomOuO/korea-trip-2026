import type { CurrencyCode } from '../../types/expense';
import { currencyList } from '../../utils/currency';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';

type Props = {
  amount: number;
  currency: CurrencyCode;
  onAmountChange: (value: number) => void;
  onCurrencyChange: (value: CurrencyCode) => void;
};

export const CurrencyInput = ({ amount, currency, onAmountChange, onCurrencyChange }: Props) => (
  <div className="grid grid-cols-[1fr_110px] gap-2">
    <Input
      type="number"
      inputMode="decimal"
      value={amount}
      onChange={(e) => onAmountChange(Number(e.target.value))}
      min={0}
      step="0.01"
    />
    <Select value={currency} onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}>
      {currencyList.map((item) => (
        <option key={item} value={item}>{item}</option>
      ))}
    </Select>
  </div>
);
