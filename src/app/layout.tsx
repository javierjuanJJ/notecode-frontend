import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "NoteCode",
  description: "Code Sharing App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#0A0A2E] via-[#12123D] to-[#1C1C46] text-white min-h-screen flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
