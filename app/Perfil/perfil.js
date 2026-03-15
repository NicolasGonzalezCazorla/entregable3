"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

const AVATARES_DISPONIBLES = [
  "/fotoPerfil.png", 
  "/avatar-leopardo.png", 
  "/avatar-oso.png", 
  "/avatar-tigre.png"
];

export default function PerfilInfo() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  
  const [form, setForm] = useState({
    nombre: "",
    username: "",
    foto_url: "/fotoPerfil.png"
  });

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      const { data, error } = await supabase
        .from("usuario")
        .select("nombre, correo_electronico, username, foto_url")
        .eq("auth_id", session.user.id)
        .single();

      if (data) {
        setUser(data);
        setForm({
          nombre: data.nombre || "",
          username: data.username || "Guerrero del Dragón",
          foto_url: data.foto_url || "/fotoPerfil.png"
        });
      }
    }
    setLoading(false);
  }

  async function handleUpdate() {
    setLoading(true);
    const { data: { session } } = await supabase.auth.getSession();
    
    const { error } = await supabase
      .from("usuario")
      .update({
        nombre: form.nombre,
        username: form.username,
        foto_url: form.foto_url
      })
      .eq("auth_id", session.user.id);

    if (!error) {
      setIsEditing(false);
      getProfile(); 
    } else {
      alert("Error al actualizar: " + error.message);
    }
    setLoading(false);
  }

  if (loading && !isEditing) return <p className="mt-5 text-xs animate-pulse font-bold text-gray-400 uppercase">Cargando Guardián...</p>;

  return (
    <section className="mt-5 flex items-start gap-8 bg-white/30 p-4 rounded-2xl border border-black/5 shadow-sm">
      
      <div className="flex w-[170px] flex-col items-center">
        <div className="h-24 w-24 rounded-full overflow-hidden border border-black/10 bg-white shadow-sm">
          <Image
            src={form.foto_url}
            alt="Avatar seleccionado"
            width={160}
            height={160}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        {isEditing ? (
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {AVATARES_DISPONIBLES.map((src) => (
              <button
                key={src}
                onClick={() => setForm({...form, foto_url: src})}
                className={`h-7 w-7 rounded-full overflow-hidden border-2 transition-transform hover:scale-110 ${form.foto_url === src ? 'border-black' : 'border-transparent opacity-50'}`}
              >
                <img src={src} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-gray-800 text-center text-sm font-black uppercase tracking-tight">
            {user?.username || "Super Panda Guerrero"}
          </p>
        )}
      </div>

      <div className="flex-1 pt-2">
        {isEditing ? (
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nombre de Guerrero</label>
              <input 
                type="text" 
                value={form.username} 
                onChange={(e) => setForm({...form, username: e.target.value})}
                placeholder="Ej: Panda Guerrero"
                className="w-full max-w-xs text-xs border-b border-gray-300 focus:border-black outline-none py-1 bg-transparent transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nombre Real</label>
              <input 
                type="text" 
                value={form.nombre} 
                onChange={(e) => setForm({...form, nombre: e.target.value})}
                placeholder="Tu nombre"
                className="w-full max-w-xs text-xs border-b border-gray-300 focus:border-black outline-none py-1 bg-transparent transition-all"
              />
            </div>
            
            <div className="flex gap-2 pt-2">
              <button 
                onClick={handleUpdate} 
                className="text-[10px] font-bold bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                GUARDAR
              </button>
              <button 
                onClick={() => setIsEditing(false)} 
                className="text-[10px] font-bold bg-gray-100 text-gray-500 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                CANCELAR
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-xs text-gray-700">
              <span className="font-semibold text-gray-900">Nombre:</span>{" "}
              {user?.nombre || "Sin nombre"}
            </p>

            <p className="text-xs text-gray-700">
              <span className="font-semibold text-gray-900">Email:</span>{" "}
              {user?.correo_electronico}
            </p>

            <button
              onClick={() => setIsEditing(true)}
              className="mt-3 inline-flex items-center justify-center h-8 w-8 rounded-md border border-black/10 bg-white shadow-sm hover:bg-black/5 transition"
              aria-label="Editar"
              title="Editar"
            >
              ✎
            </button>
          </div>
        )}
      </div>
    </section>
  );
}