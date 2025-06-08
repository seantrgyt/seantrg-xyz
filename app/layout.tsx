// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SeanTRG',
  description: 'clinically insane tech nerd',
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
        <link rel="icon" type="image/png" href="/trg.png" />
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
