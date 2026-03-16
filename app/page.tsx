export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 p-8 md:p-24 font-sans">
      <div className="max-w-2xl mx-auto">
        
        {/* HEADER */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">João</h1>
          <p className="text-lg text-slate-600 mt-2">Estudante de Publicidade & PR | IA & Automação</p>
        </header>

        {/* SOBRE MIM */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-blue-600">Sobre Mim</h2>
          <p className="leading-relaxed text-slate-700">
            Estou a construir este espaço para documentar a minha jornada na intersecção entre comunicação e tecnologia. 
            Atualmente a explorar como a IA pode otimizar processos de marketing e criação.
          </p>
        </section>

        {/* SKILLS */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-blue-600">Skills em Desenvolvimento</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">Next.js</span>
            <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">Tailwind CSS</span>
            <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">Google AI Studio</span>
            <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">Marketing Digital</span>
          </div>
        </section>

        {/* PROJETOS EM DESTAQUE */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 border-b pb-2 text-blue-600">Projetos & Experimentos</h2>
          <div className="grid grid-cols-1 gap-4">
            
            <div className="group border border-slate-200 p-5 rounded-xl hover:border-blue-300 hover:bg-blue-50/30 transition-all cursor-default">
              <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">Análise de Sentimento com IA</h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Utilização de modelos de linguagem (LLMs) para analisar feedback de campanhas e extrair insights automáticos para marcas.
              </p>
            </div>

            <div className="group border border-slate-200 p-5 rounded-xl hover:border-blue-300 hover:bg-blue-50/30 transition-all cursor-default">
              <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">Estratégia de PR Digital</h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Desenvolvimento de planos de comunicação focados em autoridade digital e gestão de crise em redes sociais.
              </p>
            </div>

          </div>
        </section>

        {/* CONTACTO / CALL TO ACTION */}
        <section className="bg-slate-900 text-white p-8 rounded-2xl mb-12 shadow-lg">
          <h2 className="text-xl font-bold mb-2">Vamos criar algo juntos?</h2>
          <p className="text-slate-300 mb-6 text-sm">Estou disponível para colaborações em projetos que envolvam tecnologia e criatividade.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://linkedin.com" target="_blank" className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm font-semibold transition-colors">
              LinkedIn
            </a>
            <a href="mailto:teu-email@exemplo.com" className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-lg text-sm font-semibold transition-colors">
              Enviar Email
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 pt-8 border-t text-sm text-slate-400 flex justify-between items-center">
          <p>© 2026 João</p>
          <p>Built with Next.js</p>
        </footer>

      </div>
    </main>
  );
}