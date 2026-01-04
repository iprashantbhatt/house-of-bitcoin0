import "./globals.css";

export const metadata = {
  title: "House of Bitcoin",
  description: "Bitcoin Halving Countdown & Live Mempool Dashboard"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
