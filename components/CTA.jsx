import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { supabase } from "@/Lib/supabase";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Envia para o Supabase
      const { error } = await supabase.from("Formulário").insert([form]);
      if (error) throw error;

      // 2. Envia para Zapier com verificação de resposta
      const zapierRes = await fetch("https://hooks.zapier.com/hooks/catch/22567975/2xm6j88/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!zapierRes.ok) {
        throw new Error(`Zapier erro: ${zapierRes.statusText}`);
      }

      // ✅ Se chegou até aqui, tudo foi enviado
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
    } catch (err) {
      console.error("Erro ao enviar:", err.message);
      alert("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <section
      id="cta"
      className="py-20 px-4 sm:px-6 bg-zincOverlay backdrop-blur-md border border-zinc-700 rounded-2xl max-w-4xl mx-auto text-center shadow-lg"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary" data-aos="fade-up">
        Pronto para tirar seu projeto do papel?
      </h2>

      <p
        className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Receba uma landing page completa com{" "}
        <span className="text-secondary">copy profissional</span>, design
        validado e <span className="text-secondary">automação com IA</span> — em
        até 5 dias úteis.
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

        <button
          onClick={() => setIsOpen(true)}
          className="border border-primary text-primary px-6 py-3 rounded-md font-semibold text-lg hover:bg-primary hover:text-black transition-all duration-300"
        >
          Preencher Formulário
        </button>
      </div>

      {/* Modal com formulário */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative bg-zinc-900 border border-zinc-700 rounded-xl max-w-lg w-full mx-auto p-6 shadow-xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <Dialog.Title className="text-xl font-bold text-primary mb-4">
              Briefing do Projeto
            </Dialog.Title>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {[
                { name: "nome", label: "Nome da empresa:" },
                { name: "negocio", label: "Descrição do negócio:" },
                { name: "objetivo", label: "Objetivo do site:" },
                { name: "publico", label: "Público-alvo:" },
                { name: "cores", label: "Cores preferidas:" },
                { name: "contato", label: "Informações de contato:" },
                {
                  name: "secoes",
                  label: "Seções desejadas:",
                  placeholder: "Ex: Sobre, Serviços, Depoimentos",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm mb-1 text-white">{field.label}</label>
                  <input
                    name={field.name}
                    type="text"
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full bg-zinc-800 text-white rounded-md p-2 text-sm"
                    required={field.name === "nome"}
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
