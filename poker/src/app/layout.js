import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title> Poker </title>
      <body>{children}</body>
    </html>
  );
}
