import type { MemberRole } from '../../types/member';
import type { ScheduleItem } from '../../types/schedule';
import { openMapLink } from '../../utils/mapLinks';
import { canEdit } from '../../utils/permissions';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { ScheduleCategoryBadge } from './ScheduleCategoryBadge';

export const ScheduleDetailModal = ({
  item,
  open,
  onClose,
  currentRole = 'owner'
}: {
  item: ScheduleItem | null;
  open: boolean;
  onClose: () => void;
  currentRole?: MemberRole;
}) => (
  <Modal open={open} onClose={onClose} title={item?.title ?? '行程詳情'}>
    {item ? (
      <div className="space-y-3 text-sm text-korea-ink">
        <p>時間：{item.date} {item.time}</p>
        <div>
          類別：<ScheduleCategoryBadge category={item.category} />
        </div>
        <p>地點：{item.locationName}</p>
        {item.notes ? <p>備註：{item.notes}</p> : null}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <Button variant="secondary" onClick={() => openMapLink(item.googleMapUrl)}>Google Map</Button>
          <Button variant="secondary" onClick={() => openMapLink(item.naverMapUrl)}>Naver Map</Button>
        </div>
        <Button variant="primary" className="w-full" disabled={!canEdit(currentRole)}>
          {canEdit(currentRole) ? '上傳照片' : 'viewer 無編輯權限'}
        </Button>
      </div>
    ) : null}
  </Modal>
);
