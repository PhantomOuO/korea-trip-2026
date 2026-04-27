import { FIXED_TRIP_ID } from '../constants/trip';
import type { Booking } from '../types/booking';

const now = new Date('2026-01-01T00:00:00+08:00');

export const bookingSeed: Booking[] = [
  {
    id: 'b-flight-1',
    tripId: FIXED_TRIP_ID,
    type: 'flight',
    title: '台北 → 首爾',
    airline: '中華航空',
    flightNumber: 'CI160',
    departureAirport: 'TPE',
    arrivalAirport: 'ICN',
    passengerName: '媽媽 / 女兒',
    bookingCode: 'KOR26A',
    startDateTime: '2026-06-05T09:30:00+08:00',
    endDateTime: '2026-06-05T13:00:00+09:00',
    notes: '起飛前 2 小時報到',
    createdBy: 'system',
    createdAt: now,
    updatedAt: now
  },
  {
    id: 'b-hotel-1',
    tripId: FIXED_TRIP_ID,
    type: 'hotel',
    title: '明洞住宿',
    hotelName: 'Seoul Myeongdong Stay',
    address: '23 Myeongdong 8ga-gil, Jung-gu, Seoul',
    checkIn: '2026-06-05',
    checkOut: '2026-06-09',
    amountTwd: 12800,
    splitAmountTwd: 6400,
    createdBy: 'system',
    createdAt: now,
    updatedAt: now
  },
  {
    id: 'b-car-1',
    tripId: FIXED_TRIP_ID,
    type: 'car',
    title: '一日租車',
    carCompany: 'Lotte Rent-a-Car',
    carModel: 'KIA K5',
    pickupLocation: '首爾站',
    returnLocation: '首爾站',
    startDateTime: '2026-06-08T08:00:00+09:00',
    endDateTime: '2026-06-08T20:00:00+09:00',
    notes: '需攜帶國際駕照',
    createdBy: 'system',
    createdAt: now,
    updatedAt: now
  },
  {
    id: 'b-voucher-1',
    tripId: FIXED_TRIP_ID,
    type: 'voucher',
    title: 'AREX 機場快線票券',
    date: '2026-06-09',
    fileUrls: ['https://example.com/voucher/arex.pdf'],
    notes: '可離線截圖備用',
    createdBy: 'system',
    createdAt: now,
    updatedAt: now
  }
];
