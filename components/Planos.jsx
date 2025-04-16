export default function Planos() { return ( <section id="planos" className="py-24 px-6 w-full flex justify-center bg-dark text-white" > <div className="max-w-6xl w-full text-center"> {/* Título */} <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary" data-aos="fade-up" > Planos sob medida para crescer com você </h2>

      {/* Grade de planos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
        {/* Plano 1 */}
        <div
          className="bg-zincOverlay backdrop-blur-sm p-8 rounded-2xl shadow-md border border-zinc-800 hover:scale-105 hover:shadow-xl transition-all duration-300"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h3 className="text-2xl font-semibold mb-2">Start Smart</h3>
          <p className="text-primary text-xl mb-4">R$ 297</p>
          <ul className="text-left space-y-2 text-gray-300 text-sm">
            <li>• Página moderna</li>
            <li>• Copy com IA</li>
            <li>• Automação simples</li>
          </ul>
        </div>
  
{/* Plano 2 - Destaque com Glow */}
<div
  className="relative z-10 bg-primary text-black p-8 rounded-2xl shadow-xl scale-105 hover:scale-110 transition-all duration-300 border-2 border-green-400 overflow-hidden"
  data-aos="zoom-in"
  data-aos-delay="200"
>
  <div className="absolute -inset-1 blur-2xl bg-primary opacity-20 z-0" />
  <div className="relative z-10">
    <h3 className="text-2xl font-semibold mb-2 flex items-center justify-center gap-2">
      Pro Convert
      <span className="text-xs bg-black text-white px-2 py-1 rounded">
        Mais Vendido
      </span>
    </h3>
    <p className="text-2xl font-bold mb-4">R$ 497</p>
    <ul className="text-left space-y-2 text-sm">
      <li>• Tudo do Start Smart</li>
      <li>• SEO otimizado</li>
      <li>• E-mail de boas-vindas com IA</li>
    </ul>
  </div>
</div>
  
        {/* Plano 3 */}
        <div
          className="bg-zincOverlay backdrop-blur-sm p-8 rounded-2xl shadow-md border border-zinc-800 hover:scale-105 hover:shadow-xl transition-all duration-300"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h3 className="text-2xl font-semibold mb-2">Creator Full AI</h3>
          <p className="text-primary text-xl mb-4">R$ 997</p>
          <ul className="text-left space-y-2 text-gray-300 text-sm">
            <li>• Página + Copy + Automações</li>
            <li>• Conteúdo semanal com IA</li>
            <li>• Personalização completa</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  ); }