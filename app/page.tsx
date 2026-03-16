export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 p-8 md:p-24 font-sans">
      <div className="max-w-2xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">João</h1>
          <p className="text-lg text-slate-600 mt-2">Estudante de Publicidade & PR | IA & Automação</p>
        </header>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-blue-600">Sobre Mim</h2>
          <p className="leading-relaxed text-slate-700">
            Estou a construir este espaço para documentar a minha jornada na intersecção entre comunicação e tecnologia. 
            Atualmente a explorar como a IA pode otimizar processos de marketing e criação.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-blue-600">Skills em Desenvolvimento</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">Next.js</span>
            <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">Tailwind CSS</span>
            <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">Google AI Studio</span>
            <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">Marketing Digital</span>
          </div>
        </section>

        <footer className="mt-20 pt-8 border-t text-sm text-slate-400">
          <p>© 2026 João • Em construção</p>
        </footer>
      </div>
    </main>
  );
}