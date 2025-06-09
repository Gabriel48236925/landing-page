import {
  ClipboardDocumentCheckIcon,
  SparklesIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="py-24 px-4 sm:px-6 md:px-8 text-white bg-gradient-to-b from-dark to-black"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título principal da seção */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-16 text-primary text-center"
          data-aos="fade-up"
        >
          Como Funciona?
        </h2>

        {/* Etapas do processo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Etapa 1 */}
          <article
            className="text-center p-6 rounded-2xl bg-zincOverlay backdrop-blur-md border border-zinc-800 shadow-md hover:shadow-xl transition-all"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ClipboardDocumentCheckIcon
              className="h-10 w-10 mx-auto text-primary mb-4"
              aria-hidden="true"
              role="img"
            />
            <h3 className="text-lg font-semibold mb-2">Preencha o Formulário</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Responda algumas perguntas rápidas sobre seu público e o que deseja comunicar.
            </p>
          </article>

          {/* Etapa 2 */}
          <article
            className="text-center p-6 rounded-2xl bg-zincOverlay backdrop-blur-md border border-zinc-800 shadow-md hover:shadow-xl transition-all"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <SparklesIcon
              className="h-10 w-10 mx-auto text-primary mb-4"
              aria-hidden="true"
              role="img"
            />
            <h3 className="text-lg font-semibold mb-2">Copy + Design com IA</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Criamos uma landing page moderna com copy persuasiva baseada no seu público.
            </p>
          </article>

          {/* Etapa 3 */}
          <article
            className="text-center p-6 rounded-2xl bg-zincOverlay backdrop-blur-md border border-zinc-800 shadow-md hover:shadow-xl transition-all"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <RocketLaunchIcon
              className="h-10 w-10 mx-auto text-primary mb-4"
              aria-hidden="true"
              role="img"
            />
            <h3 className="text-lg font-semibold mb-2">Receba em até 5 Dias</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Você recebe tudo pronto para divulgar, com integração e automação funcionando.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
