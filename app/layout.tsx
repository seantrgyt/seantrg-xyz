// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '@SeanTRG | guns.lol',
  description: 'your local memer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@1&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body {
            margin: 0;
            font-family: 'Satoshi', sans-serif;
            background-color: #080808;
            color: white;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
