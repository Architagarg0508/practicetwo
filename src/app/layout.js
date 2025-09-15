import "./globals.css";

export const metadata = {
  title: "Practice Two",
  description: "HAPPINESS IS NOT A GOAL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
