"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Card({ animal, onUnfavorite }) {
  const [favorito, setFavorito] = useState(false);
  const [userId, setUserId] = useState(null);

  const comprobarEstado = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      const { data: userData } = await supabase
        .from("usuario")
        .select("id")
        .eq("auth_id", session.user.id)
        .single();
      
      if (userData) {
        setUserId(userData.id);
        const { data: favData } = await supabase
          .from("animales_favoritos_usuarios")
          .select("*")
          .match({ animal_id: animal.id, usuario_id: userData.id });
        
        setFavorito(favData && favData.length > 0);
      }
    }
  };

  useEffect(() => {
    comprobarEstado();
  }, [animal.id]);

  const toggleFavorito = async (e) => {
    e.preventDefault(); 
    
    if (!userId) {
      alert("Inicia sesión para guardar favoritos");
      return;
    }

    if (!favorito) {

      const { error } = await supabase
        .from("animales_favoritos_usuarios")
        .insert([{ animal_id: animal.id, usuario_id: userId }]);
      
      if (!error) {
        setFavorito(true);
      } else {
        console.error("Error al guardar:", error.message);
      }
    } else {
      const { error } = await supabase
        .from("animales_favoritos_usuarios")
        .delete()
        .match({ animal_id: animal.id, usuario_id: userId });

      if (!error) {
        setFavorito(false); 
        if (onUnfavorite) {
          onUnfavorite(animal.id); 
        }
      } else {
        console.error("Error al borrar:", error.message);
      }
    }
  };

  return (
    <article className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
      <img src={animal.imagen} alt={animal.nombre} className="w-full h-[190px] object-cover" />
      <div className="p-5">
        <h3 className="text-sm font-extrabold text-gray-900 uppercase">{animal.nombre}</h3>
        <div className="mt-4 flex items-center justify-between">
          <Link href={`/detalleAnimal?id=${animal.id}`} className="px-4 py-2 text-xs font-bold bg-black/5 rounded-full border border-black/10">
            DETALLES
          </Link>
          <button
            type="button"
            onClick={toggleFavorito}
            className={`text-4xl transition-all duration-200 active:scale-75 ${favorito ? "text-red-600" : "text-gray-300"}`}
          >
            {favorito ? "❤" : "♡"}
          </button>
        </div>
      </div>
    </article>
  );
}