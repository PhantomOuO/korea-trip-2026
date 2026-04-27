import { useMemo, useState } from 'react';
import { exchangeRateService } from '../../services/exchangeRateService';
import type { CurrencyCode, RateMode } from '../../types/expense';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';
import { CurrencyInput } from './CurrencyInput';

export const ExpenseForm = () => {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState<CurrencyCode>('KRW');
  const [rateMode, setRateMode] = useState<RateMode>('auto');
  const [rate, setRate] = useState(0.0235);

  const amountTwd = useMemo(() => amount * rate, [amount, rate]);

  const onGetRate = async () => {
    const result = await exchangeRateService.getRateToTwd(currency, rateMode);
    setRate(result.rate);
  };

  return (
    <form className="space-y-3 rounded-4xl border border-korea-line bg-white p-4">
      <h3 className="text-sm font-semibold">新增記帳（MVP 示意）</h3>
      <Input type="date" />
      <Input placeholder="標題" />
      <CurrencyInput amount={amount} currency={currency} onAmountChange={setAmount} onCurrencyChange={setCurrency} />
      <div className="grid grid-cols-[1fr_auto] gap-2">
        <Select value={rateMode} onChange={(e) => setRateMode(e.target.value as RateMode)}>
          <option value="auto">auto</option>
          <option value="manual">manual</option>
          <option value="cached">cached</option>
        </Select>
        <Button type="button" variant="secondary" onClick={onGetRate}>更新匯率</Button>
      </div>
      <Input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} step="0.0001" />
      <p className="text-xs text-korea-muted">換算台幣：NT$ {amountTwd.toFixed(2)}</p>
      <Textarea placeholder="備註" rows={3} />
      <Button type="button" className="w-full">儲存（僅 UI）</Button>
    </form>
  );
};
