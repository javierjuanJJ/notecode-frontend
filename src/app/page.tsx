import Hero from "../components/Hero";
import ClientOnly from "../components/ClientOnly";
import CodeEditor from "../pages/EditorPage";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center px-4 flex-1">
      <Hero />
      <div className="w-full max-w-5xl mt-12">
        <ClientOnly>
          <CodeEditor />
        </ClientOnly>
      </div>
    </main>
  );
}
