"use client";
import { useEffect, useState } from "react";

export default function Mapa() {
  const [datosMapa, setDatosMapa] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMapa() {
      try {
        const res = await fetch('/api/mapa'); 
        
        const data = await res.json();
        if (data && data.length > 0) {
          setDatosMapa(data[0]);
        }
      } catch (error) {
        console.error("Error cargando el mapa:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMapa();
  }, []);

  if (loading) return <p className="pt-24 text-center text-xs animate-pulse">CARGANDO MAPA...</p>;

  return (
    <main className="min-h-screen bg-[#F6F7F3]">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-14">
        <section className="mb-8">
          <h1 className="text-2xl font-extrabold text-gray-900">
            {datosMapa?.titulo || "Mapa"}
          </h1>
          <p className="mt-2 text-sm font-semibold text-gray-900">
            Aquí tienes nuestro mapa para que no te pierdas nada del Zoo
          </p>
          <p className="mt-3 text-xs text-gray-600 max-w-4xl leading-relaxed">
            {datosMapa?.descripcion || "Usa el mapa para orientarte y tener una vista global."}
          </p>
        </section>

        <section className="rounded-md bg-[#E8EEDF] border border-black/10 p-6">
          <div className="rounded-md bg-white border border-black/10 overflow-hidden shadow-inner">
            <img
              src={datosMapa?.imagen_url || "/mapa.png"}
              alt="Mapa del zoo"
              className="w-full h-auto object-contain transition-opacity duration-500"
            />
          </div>
        </section>

        <div className="mt-10 h-px w-full bg-black/20" />
        
        <section className="mt-8">
          <h2 className="text-sm font-extrabold tracking-wide text-gray-900 uppercase">Leyenda</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <LegendItem color="bg-green-500" label="Zona Mamíferos" />
            <LegendItem color="bg-sky-500" label="Zona Aves" />
            <LegendItem color="bg-orange-500" label="Zona Reptiles" />
            <LegendItem color="bg-violet-500" label="Zona Acuática" />
          </div>
        </section>
      </div>
    </main>
  );
}

function LegendItem({ color, label }) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-black/10 bg-white px-4 py-3 shadow-sm">
      <span className={`h-3.5 w-3.5 rounded-full ${color}`} />
      <span className="text-xs font-semibold text-gray-800">{label}</span>
    </div>
  );
}