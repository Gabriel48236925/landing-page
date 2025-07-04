import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Rodapé principal com conteúdo institucional */}
      <footer className="bg-dark text-gray-400 py-10 px-6 text-center text-sm border-t border-zinc-800">
        <p className="mb-2">
          © {new Date().getFullYear()}{" "}
          <span className="text-primary font-semibold">Code&Copy Studio AI</span>
        </p>
        <p>Copy que conecta. Código que entrega. IA que escala.</p>
      </footer>

      {/* Botão flutuante: voltar ao topo */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={scrollToTop}
          className="bg-primary text-black p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-neon transition-all"
          aria-label="Voltar ao topo"
        >
          <ArrowUpIcon className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}
