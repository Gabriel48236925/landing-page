import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        {/* Losango com reload */}
        <button
          onClick={() => window.location.reload()}
          className="w-4 h-4 bg-primary rotate-45 rounded-sm"
          aria-label="Reload"
        />

        {/* Menu desktop */}
        <div className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
          <button onClick={() => scrollTo("beneficios")} className="text-white hover:text-primary transition">
            Benefícios
          </button>
          <button onClick={() => scrollTo("como-funciona")} className="text-white hover:text-primary transition">
            Como Funciona
          </button>
          <button onClick={() => scrollTo("planos")} className="text-white hover:text-primary transition">
            Planos
          </button>
          <button onClick={() => scrollTo("faq")} className="text-white hover:text-primary transition">
            FAQ
          </button>
        </div>

        {/* Botão do menu mobile */}
        <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu mobile flutuante */}
      {isOpen && (
        <div className="absolute top-full right-4 mt-2 w-48 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg py-2 md:hidden">
          <button onClick={() => scrollTo("beneficios")} className="block w-full text-left px-4 py-2 text-white hover:bg-zinc-800">
            Benefícios
          </button>
          <button onClick={() => scrollTo("como-funciona")} className="block w-full text-left px-4 py-2 text-white hover:bg-zinc-800">
            Como Funciona
          </button>
          <button onClick={() => scrollTo("planos")} className="block w-full text-left px-4 py-2 text-white hover:bg-zinc-800">
            Planos
          </button>
          <button onClick={() => scrollTo("faq")} className="block w-full text-left px-4 py-2 text-white hover:bg-zinc-800">
            FAQ
          </button>
        </div>
      )}
    </nav>
  );
}
