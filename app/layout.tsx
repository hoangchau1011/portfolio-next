import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <nav className="flex gap-4 p-4">
          <Link href="/">Trang chủ</Link>
          <Link href="/about">Giới thiệu</Link>
          <Link href="/projects">Dự án</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}