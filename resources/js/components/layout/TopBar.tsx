import { seedTrip } from '../../data/seedTrip';

export const TopBar = () => (
  <header className="sticky top-0 z-20 border-b border-korea-line/80 bg-korea-bg/95 px-4 py-3 backdrop-blur">
    <div className="mx-auto flex w-full max-w-md items-center justify-between">
      <div>
        <p className="text-xs text-korea-muted">2026/06/05 - 2026/06/09</p>
        <h1 className="text-base font-bold text-korea-ink">{seedTrip.title}</h1>
      </div>
      <span className="rounded-full bg-korea-peachSoft px-3 py-1 text-xs font-semibold text-korea-hanok">
        Seoul
      </span>
    </div>
  </header>
);
