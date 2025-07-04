export default function Logo() {
  return (
    <div
      className="flex items-center gap-2 font-semibold text-white text-lg md:text-xl tracking-tight whitespace-nowrap"
      aria-label="Code and Copy Studio AI"
    >
      {/* Símbolo minimalista tech */}
      <div className="w-4 h-4 rounded-sm bg-primary rotate-45 shrink-0" />

      {/* Nome da marca */}
      <span className="text-white">
        <span className="text-primary">Code</span>
        &<span className="text-secondary">Copy</span>{" "}
        <span className="font-medium text-white">Studio</span>
        <span className="text-sm ml-1 text-gray-400">AI</span>
      </span>
    </div>
  );
}
