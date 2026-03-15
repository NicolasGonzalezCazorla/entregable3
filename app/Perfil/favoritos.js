"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Card from "../card"; 

export default function Favoritos() {
  const [animales, setAnimales] = useState([]);
  const [loading, setLoading] = useState(true);

  const eliminarDeLista = (id) => {
    setAnimales((prev) => prev.filter((animal) => animal.id !== id));
  };

  useEffect(() => {
    async function cargarFavoritos() {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        const { data: userData } = await supabase
          .from("usuario")
          .select("id")
          .eq("auth_id", session.user.id)
          .single();

        if (userData) {
          const { data, error } = await supabase
            .from("animales_favoritos_usuarios")
            .select(`
              animal:animal_id (
                id, 
                nombre, 
                imagen
              )
            `)
            .eq("usuario_id", userData.id);

          if (data) {
            setAnimales(data.map(item => item.animal));
          }
        }
      }
      setLoading(false);
    }
    cargarFavoritos();
  }, []);

  if (loading) return <p className="mt-8 text-xs italic text-gray-500">Cargando tus animales preferidos...</p>;

  return (
    <section className="mt-8">
      <h2 className="text-lg font-extrabold text-gray-900 mb-4 uppercase">Mis Animales Favoritos</h2>
      
      {animales.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {animales.map((animal) => (
            <Card 
              key={animal.id} 
              animal={animal} 
              onUnfavorite={() => eliminarDeLista(animal.id)} 
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center">
          <p className="text-gray-500 text-sm italic">No tienes ningún animal favorito guardado.</p>
        </div>
      )}
    </section>
  );
}