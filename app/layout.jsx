import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  description:
    "EdgeList is a ledger of AI tools — writing, coding, image, video, and research assistants — ranked, tagged, and verified."
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
