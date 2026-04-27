import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { classNames } from '../../utils/classNames';

export const FloatingActionButton = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={classNames(
      'fixed bottom-24 right-4 z-30 h-14 w-14 rounded-full bg-korea-kimchi text-white shadow-floating',
      'transition duration-150 active:scale-95'
    )}
    aria-label="快速新增"
    type="button"
  >
    <FontAwesomeIcon icon={faPlus} />
  </button>
);
