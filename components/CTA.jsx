import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

export default function CTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    negocio: "",
    objetivo: "",
    publico: "",
    cores: "",
    contato: "",
    secoes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulário enviado com sucesso!");

    setForm({
      nome: "",
      negocio: "",
      objetivo: "",
      publico: "",
      cores: "",
      contato: "",
      secoes: "",
    });
    setIsOpen(false);
  };

  return (
    <section
      id="cta"
      className="py-20 px-4 sm:px-6 mb-24 bg-zincOverlay backdrop-blur-md border border-zinc-700 rounded-2xl max-w-4xl mx-auto text-center shadow-lg"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary" data-aos="fade-up">
        Pronto para tirar seu projeto do papel?
      </h2>

      <p
        className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Receba uma landing page com{" "}
        <span className="text-secondary">copy profissional</span>, design validado e{" "}
        <span className="text-secondary">automação com IA</span> — em até 5 dias úteis.
      </p>

      <div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <a
          href="https://wa.me/5549999109573?text=Quero%20criar%20minha%20landing%20page"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-green-400 hover:scale-105 transition-all duration-300 text-black px-6 py-3 rounded-md font-semibold text-lg shadow-md hover:ring-2 hover:ring-green-300"
        >
          Falar no WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="border border-primary text-primary px-6 py-3 rounded-md font-semibold text-lg hover:bg-primary hover:text-black transition-all duration-300"
        >
          Preencher Formulário
        </button>
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative bg-zinc-900 border border-zinc-700 rounded-xl max-w-lg w-full mx-auto p-6 shadow-xl text-left">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              aria-label="Fechar formulário"
            >
              <X className="w-5 h-5" />
            </button>

            <Dialog.Title className="text-xl font-bold text-primary mb-4">
              Briefing do Projeto
            </Dialog.Title>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: "nome", label: "Nome da empresa", autoComplete: "organization" },
                { name: "negocio", label: "Descrição do negócio", autoComplete: "off" },
                { name: "objetivo", label: "Objetivo do site", autoComplete: "off" },
                { name: "publico", label: "Público-alvo", autoComplete: "off" },
                { name: "cores", label: "Cores preferidas", autoComplete: "off" },
                { name: "contato", label: "Informações de contato", autoComplete: "email" },
                {
                  name: "secoes",
                  label: "Seções desejadas",
                  placeholder: "Ex: Sobre, Serviços, Depoimentos",
                  autoComplete: "off",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="block text-sm mb-1 text-white">
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type="text"
                    required={field.name === "nome"}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder || ""}
                    autoComplete={field.autoComplete}
                    className="w-full bg-zinc-800 text-white rounded-md p-2 text-sm"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-primary text-black py-2 rounded-md font-semibold hover:bg-green-400 transition"
              >
                Enviar Formulário
              </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
