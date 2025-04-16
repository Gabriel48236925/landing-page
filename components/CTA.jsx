export default function CTA() { return ( <section id="cta" className="py-20 px-4 sm:px-6 bg-zincOverlay backdrop-blur-md border border-zinc-700 rounded-2xl max-w-4xl mx-auto text-center shadow-lg" > <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary" data-aos="fade-up" > Pronto para tirar seu projeto do papel? </h2>

    <p
      className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      Receba uma landing page completa com{" "}
      <span className="text-secondary">copy profissional</span>, design validado
      e <span className="text-secondary">automação com IA</span> — em até 5 dias úteis.
    </p>
  
    <div
      className="flex flex-col sm:flex-row gap-4 justify-center"
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <a
        href="https://wa.me/5549999109573?text=Quero%20criar%20minha%20landing%20page"
        target="_blank"
        className="bg-primary hover:bg-green-400 hover:scale-105 transition-all duration-300 text-black px-6 py-3 rounded-md font-semibold text-lg shadow-md hover:ring-2 hover:ring-green-300"
      >
        Falar no WhatsApp
      </a>
  
      <a
        href="https://seulink.com/formulario"
        target="_blank"
        className="border border-primary text-primary px-6 py-3 rounded-md font-semibold text-lg hover:bg-primary hover:text-black transition-all duration-300"
      >
        Preencher Formulário
      </a>
    </div>
  </section>
  ); }