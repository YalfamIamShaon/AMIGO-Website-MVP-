import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "AMIGO",
  description: "AMIGO: The only 0% commission food delivery platform. Supporting merchants with zero fee listings and empowering customers to get original, fair prices directly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
