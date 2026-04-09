import type { Metadata } from \"next\";
import { Inter } from \"next/font/google\";
import \"./globals.css\";

const inter = Inter({ subsets: [\"latin\"] });

export const metadata: Metadata = {
  title: \"Trang Kế Toán - Giải Pháp Thuế & Pháp Lý\",
  description: \"Dịch vụ kế toán, thuế và pháp lý doanh nghiệp chuyên nghiệp.\",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang=\"vi\" className=\"scroll-smooth\">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
