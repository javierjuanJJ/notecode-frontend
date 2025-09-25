import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import EditorPage from "../pages/EditorPage";

export default function App() {
  return (

    <div className="min-h-screen bg-gradient-to-b from-[#0A0A2E] via-[#12123D] to-[#1C1C46] text-white flex flex-col">
      <Navbar />
      <main className="flex flex-col items-center px-4 flex-1">
        <Hero />
        <div className="w-full max-w-5xl mt-12">
          <EditorPage />
        </div>
      </main>
      <Footer />
    </div>
  );
}
