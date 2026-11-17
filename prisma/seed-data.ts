// Dữ liệu mẫu cho buổi 8 – chép nguyên file này vào prisma/seed-data.ts.
// Chỉ dùng 4 danh mục của schema trên lớp: FOOD, TRANSPORT, SALARY, OTHER.
import type { Category, Priority, TransactionType } from '../generated/prisma/enums';

type Row = {
  type: TransactionType;
  amount: number; // VND, số nguyên
  description: string;
  category: Category;
  date: Date;
};

// ngày trong tháng trước (offset -1) hoặc tháng này (offset 0)
const now = new Date();
const d = (offset: number, day: number) =>
  new Date(now.getFullYear(), now.getMonth() + offset, day);

export const ROWS: Row[] = [
  // ── tháng trước
  { type: 'INCOME', amount: 15_000_000, description: 'Lương tháng', category: 'SALARY', date: d(-1, 5) },
  { type: 'INCOME', amount: 1_200_000, description: 'Dạy kèm Vật lý', category: 'OTHER', date: d(-1, 20) },
  { type: 'EXPENSE', amount: 3_500_000, description: 'Tiền thuê phòng', category: 'OTHER', date: d(-1, 1) },
  { type: 'EXPENSE', amount: 65_000, description: 'Phở bò', category: 'FOOD', date: d(-1, 3) },
  { type: 'EXPENSE', amount: 80_000, description: 'Đổ xăng', category: 'TRANSPORT', date: d(-1, 6) },
  { type: 'EXPENSE', amount: 45_000, description: 'Cà phê sữa đá', category: 'FOOD', date: d(-1, 8) },
  { type: 'EXPENSE', amount: 450_000, description: 'Tiền điện', category: 'OTHER', date: d(-1, 10) },
  { type: 'EXPENSE', amount: 2_800_000, description: 'Đi chợ cả tháng', category: 'FOOD', date: d(-1, 12) },
  { type: 'EXPENSE', amount: 200_000, description: 'Vé xe buýt tháng', category: 'TRANSPORT', date: d(-1, 14) },
  { type: 'EXPENSE', amount: 150_000, description: 'Grab về quê', category: 'TRANSPORT', date: d(-1, 17) },
  { type: 'EXPENSE', amount: 350_000, description: 'Lẩu cùng bạn', category: 'FOOD', date: d(-1, 19) },
  { type: 'EXPENSE', amount: 250_000, description: 'Internet', category: 'OTHER', date: d(-1, 21) },
  { type: 'EXPENSE', amount: 120_000, description: 'Cơm văn phòng', category: 'FOOD', date: d(-1, 23) },
  { type: 'EXPENSE', amount: 85_000, description: 'Đổ xăng', category: 'TRANSPORT', date: d(-1, 25) },
  { type: 'EXPENSE', amount: 300_000, description: 'Quà sinh nhật bạn', category: 'OTHER', date: d(-1, 27) },
  // ── tháng này
  { type: 'INCOME', amount: 15_000_000, description: 'Lương tháng', category: 'SALARY', date: d(0, 5) },
  { type: 'INCOME', amount: 2_000_000, description: 'Freelance thiết kế web', category: 'OTHER', date: d(0, 7) },
  { type: 'EXPENSE', amount: 3_500_000, description: 'Tiền thuê phòng', category: 'OTHER', date: d(0, 1) },
  { type: 'EXPENSE', amount: 55_000, description: 'Bánh mì và cà phê', category: 'FOOD', date: d(0, 1) },
  { type: 'EXPENSE', amount: 200_000, description: 'Vé xe buýt tháng', category: 'TRANSPORT', date: d(0, 2) },
  { type: 'EXPENSE', amount: 1_500_000, description: 'Đi chợ cả tuần', category: 'FOOD', date: d(0, 2) },
  { type: 'EXPENSE', amount: 85_000, description: 'Đổ xăng', category: 'TRANSPORT', date: d(0, 3) },
  { type: 'EXPENSE', amount: 150_000, description: 'Cắt tóc', category: 'OTHER', date: d(0, 3) },
  { type: 'EXPENSE', amount: 480_000, description: 'Tiền điện', category: 'OTHER', date: d(0, 4) },
  { type: 'EXPENSE', amount: 70_000, description: 'Bún bò', category: 'FOOD', date: d(0, 4) },
  { type: 'EXPENSE', amount: 60_000, description: 'Grab đi học', category: 'TRANSPORT', date: d(0, 5) },
  { type: 'EXPENSE', amount: 250_000, description: 'Internet', category: 'OTHER', date: d(0, 6) },
  { type: 'EXPENSE', amount: 40_000, description: 'Trà sữa', category: 'FOOD', date: d(0, 6) },
  { type: 'EXPENSE', amount: 199_000, description: 'Gói nghe nhạc', category: 'OTHER', date: d(0, 7) },
  { type: 'EXPENSE', amount: 650_000, description: 'Đi chợ cả tuần', category: 'FOOD', date: d(0, 8) },
];

export const WISHLIST: { name: string; cost: number; priority: Priority }[] = [
  { name: 'Tai nghe chống ồn', cost: 6_990_000, priority: 'HIGH' },
  { name: 'Bàn phím cơ', cost: 1_290_000, priority: 'MEDIUM' },
  { name: 'Sách "Clean Code"', cost: 350_000, priority: 'LOW' },
];
