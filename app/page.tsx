export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans scroll-smooth">
      
      {/* NAVBAR FIXA */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-8 h-16 flex items-center justify-between">
          <span className="font-bold text-blue-600 tracking-tight">CURRÍCULO</span>
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#sobre" className="hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#projetos" className="hover:text-blue-600 transition-colors">Projetos</a>
            <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-8 pt-32 pb-24">
        
        {/* HEADER */}
        <header className="mb-20">
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">João Pedro</h1>
          <p className="text-xl text-slate-600 mt-4 leading-relaxed">
            Estudante de <span className="text-slate-900 font-medium">Publicidade e Relações Públicas</span> <span className="text-blue-600">|</span> IA & Automação
          </p>
        </header>

        {/* SOBRE MIM */}
        <section id="sobre" className="mb-20 scroll-mt-24">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold mb-4 text-blue-600">01. Sobre Mim</h2>
          <p className="text-lg leading-relaxed text-slate-700">
            Estou a construir este espaço para documentar a minha jornada na intersecção entre comunicação e tecnologia. 
            Atualmente a explorar como a IA pode otimizar processos de marketing e criação.
          </p>
          
          <div className="mt-8">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'Tailwind CSS', 'Google AI Studio', 'Marketing Digital', 'Automation'].map((skill) => (
                <span key={skill} className="px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="mb-20 scroll-mt-24">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-blue-600">02. Projetos em Destaque</h2>
          <div className="grid grid-cols-1 gap-6">
            
            <div className="group border border-slate-200 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-500/5 transition-all">
              <span className="text-xs font-bold text-blue-500 mb-2 block">IA & Insights</span>
              <h3 className="font-bold text-xl group-hover:text-blue-600 transition-colors">Análise de Sentimento com IA</h3>
              <p className="text-slate-600 mt-3 leading-relaxed">
                Utilização de modelos de linguagem (LLMs) para analisar feedback de campanhas e extrair insights automáticos para marcas.
              </p>
            </div>

            <div className="group border border-slate-200 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-500/5 transition-all">
              <span className="text-xs font-bold text-blue-500 mb-2 block">Publicidade & PR</span>
              <h3 className="font-bold text-xl group-hover:text-blue-600 transition-colors">Estratégia de PR Digital</h3>
              <p className="text-slate-600 mt-3 leading-relaxed">
                Desenvolvimento de planos de comunicação focados em autoridade digital e gestão de crise em redes sociais.
              </p>
            </div>

          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="scroll-mt-24">
          <div className="bg-slate-900 text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Vamos criar algo juntos?</h2>
              <p className="text-slate-400 mb-8 max-w-md">
                Estou disponível para colaborações em projetos que envolvam tecnologia, comunicação e criatividade.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://linkedin.com" target="_blank" className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-xl font-bold transition-all transform hover:-translate-y-1 text-center">
                  LinkedIn
                </a>
                <a href="mailto:teu-email@exemplo.com" className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-xl font-bold transition-all text-center">
                  E-mail
                </a>
              </div>
            </div>
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-24 pt-8 border-t border-slate-100 text-sm text-slate-400 flex justify-between items-center">
          <p>© 2026 João Pedro</p>
          <div className="flex gap-4">
            <span>Next.js</span>
            <span>Vercel</span>
          </div>
        </footer>

      </div>
    </main>
  );
}