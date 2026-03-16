'use client';
import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');

  const content = {
    pt: {
      navCurr: "CURRÍCULO",
      navSobre: "Sobre",
      navProj: "Projetos",
      navCont: "Contacto",
      role: "Estudante de Publicidade e Relações Públicas",
      sobreTitulo: "01. Sobre Mim",
      sobreTexto: "Estou a construir este espaço para documentar a minha jornada na intersecção entre comunicação e tecnologia. Atualmente a explorar como a IA pode otimizar processos de marketing e criação.",
      techTitulo: "Ferramentas & Tech Stack",
      aiNote: "(Desenvolvimento assistido por IA)",
      projTitulo: "02. Projetos em Destaque",
      proj1Cat: "IA & Insights",
      proj1Tit: "Análise de Sentimento com IA",
      proj1Desc: "Utilização de modelos de linguagem (LLMs) para analisar feedback de campanhas e extrair insights.",
      proj2Cat: "Publicidade & PR",
      proj2Tit: "Estratégia de PR Digital",
      proj2Desc: "Desenvolvimento de planos de comunicação focados em autoridade digital e gestão de crise.",
      ctatitulo: "Vamos criar algo juntos?",
      ctadesc: "Estou disponível para colaborações em projetos que envolvam tecnologia, comunicação e criatividade.",
    },
    en: {
      navCurr: "RESUME",
      navSobre: "About",
      navProj: "Projects",
      navCont: "Contact",
      role: "Advertising & PR Student",
      sobreTitulo: "01. About Me",
      sobreTexto: "I'm building this space to document my journey at the intersection of communication and technology. Currently exploring how AI can optimize marketing and creative processes.",
      techTitulo: "Tools & Tech Stack",
      aiNote: "(AI-assisted development)",
      projTitulo: "02. Featured Projects",
      proj1Cat: "AI & Insights",
      proj1Tit: "AI Sentiment Analysis",
      proj1Desc: "Using Large Language Models (LLMs) to analyze campaign feedback and extract automated insights.",
      proj2Cat: "Advertising & PR",
      proj2Tit: "Digital PR Strategy",
      proj2Desc: "Developing communication plans focused on digital authority and social media crisis management.",
      ctatitulo: "Let's build together?",
      ctadesc: "I'm open to collaborations on projects involving technology, communication, and creativity.",
    }
  };

  const t = content[lang];
  
  // Lista de ferramentas atualizada
  const tools = [
    "Visual Studio Code", 
    "GitHub", 
    "Vercel", 
    "Google AI Studio", 
    "Codex", 
    "Tailwind CSS", 
    "Next.js"
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans scroll-smooth">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-8 h-16 flex items-center justify-between">
          <span className="font-bold text-blue-600 tracking-tight">{t.navCurr}</span>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
              <a href="#sobre" className="hover:text-blue-600 transition-colors">{t.navSobre}</a>
              <a href="#projetos" className="hover:text-blue-600 transition-colors">{t.navProj}</a>
              <a href="#contacto" className="hover:text-blue-600 transition-colors">{t.navCont}</a>
            </div>
            
            <button 
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="bg-slate-100 px-3 py-1 rounded-md text-xs font-bold hover:bg-blue-600 hover:text-white transition-all uppercase"
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-8 pt-32 pb-24">
        
        <header className="mb-20">
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">João Pedro</h1>
          <p className="text-xl text-slate-600 mt-4 leading-relaxed">
            {t.role} <span className="text-blue-600">|</span> IA & Automação
          </p>
        </header>

        {/* SOBRE MIM & TOOLS */}
        <section id="sobre" className="mb-20 scroll-mt-24">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold mb-4 text-blue-600">{t.sobreTitulo}</h2>
          <p className="text-lg leading-relaxed text-slate-700 mb-8">{t.sobreTexto}</p>
          
          <div className="mt-8">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
              {t.techTitulo} <span className="text-[10px] lowercase font-normal italic">{t.aiNote}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium hover:border-blue-300 transition-colors">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="mb-20 scroll-mt-24">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-blue-600">{t.projTitulo}</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="group border border-slate-200 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-500/5 transition-all">
              <span className="text-xs font-bold text-blue-500 mb-2 block">{t.proj1Cat}</span>
              <h3 className="font-bold text-xl group-hover:text-blue-600 transition-colors">{t.proj1Tit}</h3>
              <p className="text-slate-600 mt-3 leading-relaxed">{t.proj1Desc}</p>
            </div>
            <div className="group border border-slate-200 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-500/5 transition-all">
              <span className="text-xs font-bold text-blue-500 mb-2 block">{t.proj2Cat}</span>
              <h3 className="font-bold text-xl group-hover:text-blue-600 transition-colors">{t.proj2Tit}</h3>
              <p className="text-slate-600 mt-3 leading-relaxed">{t.proj2Desc}</p>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="scroll-mt-24">
          <div className="bg-slate-900 text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">{t.ctatitulo}</h2>
              <p className="text-slate-400 mb-8 max-w-md">{t.ctadesc}</p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-xl font-bold transition-all text-center min-w-[140px]">LinkedIn</a>
                <a href="mailto:teuemail@exemplo.com" className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-xl font-bold transition-all text-center min-w-[140px]">Email</a>
              </div>
            </div>
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
          </div>
        </section>

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