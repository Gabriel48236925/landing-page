import Logo from "./Logo";

export default function Hero() { return ( <header className="relative text-center py-20 sm:py-24 md:py-28 px-4 sm:px-6 bg-dark text-white overflow-hidden"> {/* Fundo com blobs tech visíveis */} <div className="absolute inset-0 -z-10 pointer-events-none"> <div className="absolute top-[-80px] left-[-80px] w-[280px] h-[280px] bg-primary opacity-50 blur-2xl rounded-full" /> <div className="absolute bottom-[-80px] right-[-80px] w-[280px] h-[280px] bg-secondary opacity-40 blur-2xl rounded-full" /> </div>

  {/* Logo */}
  <div
    className="flex justify-center mb-10 sm:mb-12 brightness-125"
    data-aos="fade-down"
  >
    <Logo />
  </div>

  {/* Título principal */}
  <h1
    className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 sm:mb-8 max-w-2xl mx-auto"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <span className="text-primary">Crie uma Página</span> que Vende com Autoridade em{" "}
    <span className="text-secondary">5 Dias</span>
  </h1>

  {/* Descrição */}
  <p
    className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 sm:mb-16 max-w-xl mx-auto"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    Combine copy persuasiva, automação inteligente e design funcional — tudo pronto
    para validar seu negócio com IA e tecnologia.
  </p>

  {/* Botão CTA */}
  <a
    href="https://wa.me/5549999109573?text=Quero%20saber%20mais%20sobre%20os%20planos"
    className="bg-primary hover:bg-green-400 hover:scale-105 transition-all duration-300 text-black px-6 py-3 rounded-md font-semibold text-base sm:text-lg shadow-md hover:ring-2 hover:ring-green-300"
    data-aos="zoom-in"
    data-aos-delay="300"
  >
    Falar no WhatsApp
  </a>

  {/* Mockup da Página */}
  <div className="mt-16 sm:mt-20" data-aos="fade-up" data-aos-delay="400">
    <img
      src="/mockup.png"
      alt="Mockup da Página"
      className="mx-auto rounded-md sm:rounded-xl shadow-xl w-full max-w-4xl"
    />
  </div>

  {/* Gradiente inferior */}
  <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent to-dark" />
</header>
); }