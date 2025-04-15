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
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-primary text-center" data-aos="fade-up">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {perguntas.map((item, index) => (
            <div
              key={index}
              className="border border-zinc-700 rounded-xl p-4 cursor-pointer bg-zincOverlay backdrop-blur-md"
              onClick={() => toggle(index)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-white">{item.pergunta}</h3>
                <span className="text-primary text-2xl">
                  {aberta === index ? "−" : "+"}
                </span>
              </div>
              {aberta === index && (
                <p className="text-gray-300 mt-3 text-sm">{item.resposta}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
