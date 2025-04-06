export const metadata = {
  title: 'Stat Quo',
  description: 'Be Bold. Stay Stat Quo.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">{children}</body>
    </html>
  );
}
