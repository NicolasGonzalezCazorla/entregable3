"use client";

import { useState, useEffect } from "react"; 
import Grid from "../grid";
import NavBar from "../navBar";
import Filtro from "./filtro";

export default function Animales() {
  const [animales, setAnimales] = useState([]);
  const [loading, setLoading] = useState(true);

  const [orden, setOrden] = useState("gustados");
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroContinente, setFiltroContinente] = useState("");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    async function cargarAnimales() {
      try {
        const response = await fetch('/api/animales'); 
        const data = await response.json();

        if (response.ok) {
          setAnimales(data); 
        } else {
          console.error("Error al obtener datos:", data.error);
        }
      } catch (error) {
        console.error("Error de conexión:", error);
      } finally {
        setLoading(false);
      }
    }

    cargarAnimales();
  }, []);

  const animalesFiltrados = animales
    .filter((animal) => {
      const tipoOK = filtroTipo === "" || animal.dieta === filtroTipo; 
      const continenteOK = filtroContinente === "" || animal.origen === filtroContinente;
      const nombreOK = animal.nombre.toLowerCase().includes(busqueda.toLowerCase());
      return tipoOK && continenteOK && nombreOK;
    })
    .sort((a, b) => {
      if (orden === "alfabetico") return a.nombre.localeCompare(b.nombre);
      return a.id - b.id;
    });

  if (loading) return <div className="text-center py-20">Cargando animales desde la base de datos...</div>;

  return (
    <main className="bg-[#F6F7F3]">
      <div className="mx-auto max-w-6xl px-6 pb-12">
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold text-gray-900">Animales</h1>
          <p className="mt-2 text-sm text-gray-700 max-w-3xl leading-relaxed">
            Descubre la cantidad de especies dentro de nuestro zoo (Datos reales de Supabase)
          </p>
        </div>

        <div className="mb-8 flex justify-end">
          <div className="w-full md:w-[420px] rounded-full border border-black/10 bg-white shadow-sm px-4 py-2">
            <NavBar busqueda={busqueda} setBusqueda={setBusqueda} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
          <aside className="lg:sticky lg:top-28 h-fit">
            <Filtro
              orden={orden}
              setOrden={setOrden}
              filtroTipo={filtroTipo}
              setFiltroTipo={setFiltroTipo}
              filtroContinente={filtroContinente}
              setFiltroContinente={setFiltroContinente}
            />
          </aside>

          <section>
            <Grid animales={animalesFiltrados} />

            <div className="mt-12 flex justify-center">
              <button
                type="button"
                className="rounded-full bg-[#B9A99A] px-8 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Mostrar más
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}