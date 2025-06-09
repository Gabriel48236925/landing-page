import { useState } from "react";

const perguntas = [
  {
    pergunta: "Em quanto tempo a landing page fica pronta?",
    resposta: "Você recebe tudo pronto em até 5 dias úteis após preencher o formulário.",
  },
  {
    pergunta: "Preciso ter domínio ou site já pronto?",
    resposta: "Não. Nós entregamos sua landing 100% pronta, em HTML ou plataforma como Notion ou Framer.",
  },
  {
    pergunta: "É possível integrar com WhatsApp ou formulário?",
    resposta: "Sim! Fazemos integrações com Google Forms, WhatsApp, email ou sistemas simples de captura.",
  },
  {
    pergunta: "Vocês criam também o conteúdo?",
    resposta: "Sim! A copy é feita com IA + revisão humana. Você só preenche um formulário.",
  },
];

export default function FAQ() {
  const [aberta, setAberta] = useState(null);

  const toggle = (index) => {
    setAberta(aberta === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center"
          data-aos="fade-up"
        >
          Perguntas Frequentes
        </h2>

        <dl className="space-y-4">
          {perguntas.map((item, index) => {
            const isOpen = aberta === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div
                key={index}
                className="border border-zinc-700 rounded-xl bg-zincOverlay backdrop-blur-md"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <dt>
                  <button
                    id={buttonId}
                    aria-controls={contentId}
                    aria-expanded={isOpen}
                    onClick={() => toggle(index)}
                    className="w-full text-left px-4 py-4 flex justify-between items-center cursor-pointer"
                    role="button"
                  >
                    <h3 className="font-semibold text-lg">{item.pergunta}</h3>
                    <span className="text-primary text-2xl">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </dt>
                <dd
                  id={contentId}
                  className={`px-4 pb-4 text-gray-300 text-sm transition-all duration-300 ${
                    isOpen ? "block" : "hidden"
                  }`}
                  aria-hidden={!isOpen}
                >
                  {item.resposta}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
