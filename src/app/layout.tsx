import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "图星人 - AI",
  description: "在线选图，在线改图，用图很简单",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
