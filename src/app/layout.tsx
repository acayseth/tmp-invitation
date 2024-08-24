import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import clsx from "clsx";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Not found",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ro">
      <body className={clsx(onest.className)}>{children}</body>
    </html>
  );
}
