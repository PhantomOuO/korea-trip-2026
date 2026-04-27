import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigationItems, type AppTab } from '../../constants/navigation';
import { classNames } from '../../utils/classNames';

type Props = {
  currentTab: AppTab;
  onChange: (tab: AppTab) => void;
};

export const BottomNav = ({ currentTab, onChange }: Props) => (
  <nav className="safe-bottom fixed bottom-0 left-0 right-0 z-20 border-t border-korea-line bg-korea-bg/95 backdrop-blur">
    <div className="mx-auto grid w-full max-w-md grid-cols-6 gap-1 px-2 pt-2">
      {navigationItems.map((item) => {
        const isActive = currentTab === item.key;
        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onChange(item.key as AppTab)}
            className={classNames(
              'flex flex-col items-center justify-center rounded-2xl py-2 text-[11px] font-medium transition duration-150 active:scale-95',
              isActive ? 'bg-korea-peachSoft text-korea-kimchi' : 'text-korea-muted'
            )}
          >
            <FontAwesomeIcon icon={item.icon} className="mb-1 text-sm" />
            {item.label}
          </button>
        );
      })}
    </div>
  </nav>
);
