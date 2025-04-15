import GridBackground from "./GridBackground"; // 👈 Importa o microelemento tech

export default function Logo() {
  return (
    <header className="relative">
      <GridBackground /> {/* 👈 Insere o fundo técnico atrás da logo */}

      <div className="flex items-center gap-2 font-semibold text-white text-lg md:text-xl tracking-tight relative z-10">
        {/* Símbolo minimalista tech */}
        <div className="w-4 h-4 rounded-sm bg-primary rotate-45" />
        <span className="text-white">
          <span className="text-primary">Code</span>&<span className="text-secondary">Copy</span>{" "}
          Studio<span className="text-sm ml-1 text-gray-400">AI</span>
        </span>
      </div>
    </header>
  );
}
