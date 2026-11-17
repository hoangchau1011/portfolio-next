import 'dotenv/config';
import { prisma } from '../lib/prisma';
import { ROWS, WISHLIST } from './seed-data';
const EMAIL = 'demo@phy10615.vn';
async function main() {
    await prisma.user.deleteMany({
        where: { email: EMAIL },
    });
    const { id: userId } = await prisma.user.create({
        data: { email: EMAIL, name: 'Sinh viên demo' },
    });
    await prisma.transaction.createMany({
        data: ROWS.map((r) => ({ ...r, userId })),
    });
    await prisma.wishlistItem.createMany({
        data: WISHLIST.map((w) => ({ ...w, userId })),
    });
}
main().finally(() => prisma.$disconnect());