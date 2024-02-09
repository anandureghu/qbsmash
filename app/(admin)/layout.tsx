import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "@/app/(admin)/components/Sidebar";
import "../globals.css";
import "./layout.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "QSmash Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} admin_layout`}>
        <Sidebar />
        <div style={{ padding: "20px", paddingLeft: "170px" }}>{children}</div>
      </body>
    </html>
  );
}
