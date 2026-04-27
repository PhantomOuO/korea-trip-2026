const TRIP_ID = 'korea-family-trip-2026';

export const storagePaths = {
  memberAvatar: (memberId: string) => `trips/${TRIP_ID}/members/${memberId}/avatar.webp`,
  schedulePhoto: (scheduleId: string, index = 1) => `trips/${TRIP_ID}/schedule/${scheduleId}/photo-${String(index).padStart(3, '0')}.webp`,
  bookingCover: (bookingId: string) => `trips/${TRIP_ID}/bookings/${bookingId}/cover.webp`,
  bookingVoucherPdf: (bookingId: string) => `trips/${TRIP_ID}/bookings/${bookingId}/voucher.pdf`,
  voucherImage: (voucherId: string) => `trips/${TRIP_ID}/vouchers/${voucherId}/voucher.webp`,
  voucherPdf: (voucherId: string) => `trips/${TRIP_ID}/vouchers/${voucherId}/voucher.pdf`,
  journalImage: (journalId: string, index = 1) => `trips/${TRIP_ID}/journals/${journalId}/image-${String(index).padStart(3, '0')}.webp`
};
