import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/Lib/supabase";

export default function AdminDashboard() {
  const router = useRouter();
  const [formularios, setFormularios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Verifica se o usuário está logado
  useEffect(() => {
    const verificarSessao = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.push("/admin/login");
      } else {
        buscarFormularios();
      }
    };
    verificarSessao();
  }, []);

  // Busca os dados da tabela
  const buscarFormularios = async () => {
    setCarregando(true);
    const { data, error } = await supabase.from("Formulário").select("*").order("created_at", { ascending: false });
    if (error) {
      console.error("Erro ao buscar formulários:", error);
    } else {
      setFormularios(data);
    }
    setCarregando(false);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-primary mb-6">📋 Formulários Recebidos</h1>

      {carregando ? (
        <p>Carregando...</p>
      ) : (
        <div className="overflow-x-auto border border-zinc-700 rounded-lg">
          <table className="min-w-full text-sm bg-zinc-900">
            <thead className="bg-zinc-800 text-primary">
              <tr>
                <th className="p-3 text-left">Empresa</th>
                <th className="p-3 text-left">Objetivo</th>
                <th className="p-3 text-left">Público</th>
                <th className="p-3 text-left">Contato</th>
                <th className="p-3 text-left">Criado em</th>
              </tr>
            </thead>
            <tbody>
              {formularios.map((item) => (
                <tr key={item.id} className="border-t border-zinc-700 hover:bg-zinc-800">
                  <td className="p-3">{item.nome}</td>
                  <td className="p-3">{item.objetivo}</td>
                  <td className="p-3">{item.publico}</td>
                  <td className="p-3">{item.contato}</td>
                  <td className="p-3">{new Date(item.created_at).toLocaleString("pt-BR")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
