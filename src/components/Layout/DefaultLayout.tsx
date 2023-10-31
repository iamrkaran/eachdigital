import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Each Digital",
  description: "Each Digital is a Social Media Network for the Future",
};

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
