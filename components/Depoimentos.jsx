import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const depoimentos = [
  {
    texto: "Tive meu primeiro lead em menos de 24h com a landing que eles criaram.",
    autor: "Carla, designer freelancer",
  },
  {
    texto: "O design ficou muito acima do esperado. Profissional demais!",
    autor: "Lucas, gestor de tráfego",
  },
  {
    texto: "Só preenchi o formulário e recebi tudo pronto pra divulgar.",
    autor: "Amanda, coach de performance",
  },
];

export default function Depoimentos() {
  const [index, setIndex] = useState(0);

  // Autoplay a cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % depoimentos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % depoimentos.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  return (
    <section
      id="depoimentos"
      className="py-24 px-4 sm:px-6 md:px-8 bg-dark text-white text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">
          Depoimentos reais de clientes
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-zincOverlay backdrop-blur-md border border-zinc-700 rounded-xl p-8 shadow-lg text-left"
            >
              <p className="text-lg text-gray-200 italic mb-4">
                “{depoimentos[index].texto}”
              </p>
              <p className="text-sm text-gray-400">
                — {depoimentos[index].autor}
              </p>

              {/* Exemplo futuro de imagem com alt otimizado para SEO */}
              {/*
              <img
                src="/images/clientes/cliente1.jpg"
                alt="Carla, designer freelancer satisfeita com landing page criada pela Code&Copy Studio AI"
                className="mt-4 rounded-full w-12 h-12 object-cover"
              />
              */}
            </motion.div>
          </AnimatePresence>

          {/* Navegação dos depoimentos */}
          <div className="mt-6 flex justify-center gap-6">
            <button
              onClick={handlePrev}
              className="text-white hover:text-primary transition"
              aria-label="Anterior"
            >
              ← Anterior
            </button>
            <button
              onClick={handleNext}
              className="text-white hover:text-primary transition"
              aria-label="Próximo"
            >
              Próximo →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
