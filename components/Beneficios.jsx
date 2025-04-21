export default function Beneficios() {
  return (
    <section
      id="beneficios"
      className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-32"
    >
      <div className="bg-zincOverlay backdrop-blur-md p-10 rounded-2xl border border-zinc-700 text-white shadow-xl">
        {/* Título */}
        <h2
          className="text-2xl md:text-3xl font-semibold mb-12 text-primary text-center"
          data-aos="fade-up"
        >
          O que você recebe no plano inicial (R$ 297)
        </h2>

        {/* Lista de benefícios */}
        <ul className="space-y-6 md:space-y-8 text-lg text-gray-300">
          <li
            className="flex items-start gap-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src="/icon-check.svg" alt="check" className="h-6 mt-1 shrink-0" />
            <span className="leading-relaxed">
              Landing page moderna e leve (HTML, Notion ou Framer)
            </span>
          </li>

          <li
            className="flex items-start gap-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src="/icon-check.svg" alt="check" className="h-6 mt-1 shrink-0" />
            <span className="leading-relaxed">
              Copy persuasiva e profissional com alta conversão
            </span>
          </li>

          <li
            className="flex items-start gap-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src="/icon-check.svg" alt="check" className="h-6 mt-1 shrink-0" />
            <span className="leading-relaxed">
              Integração com WhatsApp, Google Forms ou e-mail
            </span>
          </li>

          <li
            className="flex items-start gap-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img src="/icon-check.svg" alt="check" className="h-6 mt-1 shrink-0" />
            <span className="leading-relaxed">
              Automação de mensagem ou e-mail de boas-vindas com IA
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
