import { PhoneIcon } from "@heroicons/react/24/outline"; import Logo from "./Logo";

export default function Navbar() { return ( <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-zinc-800 px-4 sm:px-6 py-4"> <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4"> {/* Logo */} <Logo />

    {/* Botão de Ação */}
    <a
      href="https://wa.me/5549999109573?text=Quero%20criar%20minha%20landing%20page"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-green-500 text-black px-4 py-2 rounded-md font-medium text-sm hover:bg-green-400 transition-all whitespace-nowrap"
    >
      <PhoneIcon className="h-5 w-5" />
      WhatsApp
    </a>
  </div>
</nav>
); }