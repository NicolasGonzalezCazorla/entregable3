// app/detalleAnimal/detalleAnimal.js
import { supabase } from "@/lib/supabase";

export default async function DetalleAnimal({ id }) {
  if (!id) return <div className="p-10 text-center text-gray-500">No se ha seleccionado ningún animal.</div>;

  // Pedimos los datos del animal específico por ID
  const { data: animal, error } = await supabase
    .from("animal")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !animal) {
    return <div className="p-10 text-center text-red-500">Error al cargar el animal o no existe.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-16 text-[#1a1a1a]">
      {/* SECCIÓN SUPERIOR: IMAGEN Y DESCRIPCIÓN */}
      <div className="flex flex-col md:flex-row gap-12 mb-20 items-start">
        <div className="md:w-1/2">
          <img
            src={animal.imagen}
            alt={animal.nombre}
            className="w-full h-auto rounded-[2.5rem] shadow-lg object-cover aspect-[4/3]"
          />
        </div>

        <div className="md:w-1/2 pt-4">
          <p className="text-gray-600 text-xl leading-relaxed italic">
            "{animal.descripcion}"
          </p>
        </div>
      </div>

      {/* SECCIÓN INFERIOR: TÍTULO Y FICHA TÉCNICA */}
      <section className="border-t border-gray-100 pt-12">
        <h1 className="text-7xl font-black mb-16 tracking-tighter uppercase text-slate-900">
          {animal.nombre}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
          {/* Columna Izquierda */}
          <div className="space-y-12">
            <InfoBox label="Nombre científico" value={animal.nombre_cient} isItalic />
            <InfoBox label="Origen" value={animal.origen} />
            <InfoBox label="Dieta" value={animal.dieta} />
          </div>

          {/* Columna Derecha */}
          <div className="space-y-12">
            <InfoBox label="Esperanza de vida" value={animal.esperanza_vida} />
            <InfoBox label="Estado de conservación" value="Vulnerable" isHighlighted />
            <InfoBox label="Comportamiento" value={animal.comportamiento} />
          </div>
        </div>
      </section>
    </div>
  );
}

// Componente pequeño para los items de la ficha (limpia el código)
function InfoBox({ label, value, isItalic = false, isHighlighted = false }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">{label}</p>
      <p className={`text-2xl font-bold ${isItalic ? 'italic' : ''} ${isHighlighted ? 'text-orange-600' : 'text-slate-800'}`}>
        {value}
      </p>
    </div>
  );
}