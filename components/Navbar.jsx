import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 100) {
        setVisible(false); // Rolando para baixo
      } else {
        setVisible(true); // Rolando para cima
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800 px-6 py-4 transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between relative font-grotesk">
        {/* Logo completa (desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <Logo />
        </div>

        {/* Losango (mobile) */}
        <div className="flex md:hidden items-center gap-2">
          <div className="w-4 h-4 bg-primary rotate-45 rounded-sm" />
        </div>

        {/* Menu central (desktop) */}
        <div className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
          <button onClick={() => scrollTo("beneficios")} className="text-white hover:text-primary transition">Benefícios</button>
          <button onClick={() => scrollTo("como-funciona")} className="text-white hover:text-primary transition">Como Funciona</button>
          <button onClick={() => scrollTo("planos")} className="text-white hover:text-primary transition">Planos</button>
          <button onClick={() => scrollTo("faq")} className="text-white hover:text-primary transition">FAQ</button>
        </div>

        {/* Botão WhatsApp (desktop) + menu toggle (mobile) */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5549999109573?text=Quero%20criar%20minha%20landing%20page"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-primary text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-400 hover:scale-105 transition-all"
          >
            WhatsApp
          </a>
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu flutuante (mobile) */}
      {isOpen && (
        <div className="absolute top-full right-4 mt-2 w-48 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg py-2 md:hidden">
          <button onClick={() => scrollTo("beneficios")} className="block w-full text-left px-4 py-2 text-white hover:bg-zinc-800">Benefícios</button>
          <button onClick={() => scrollTo("como-funciona")} className="block w-full text-left px-4 py-2 text-white hover:bg-zinc-800">Como Funciona</button>
          <button onClick={() => scrollTo("planos")} className="block w-full text-left px-4 py-2 text-white hover:bg-zinc-800">Planos</button>
          <button onClick={() => scrollTo("faq")} className="block w-full text-left px-4 py-2 text-white hover:bg-zinc-800">FAQ</button>
        </div>
      )}
    </nav>
  );
}
