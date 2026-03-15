"use client";

export default function ActividadesContent({ actividades }) {
  const explora = actividades.filter(a => a.categoria === 'explora');
  const visitadas = actividades.filter(a => a.categoria === 'visitadas');

  return (
    <main className="mx-auto max-w-6xl px-6 pb-14 bg-[#F6F7F3]">
      <section className="mb-12 pt-10">
        <h1 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tight">
          Actividades que conectan con la naturaleza
        </h1>
        <p className="text-gray-600 font-medium text-lg">
          Descubre experiencias únicas para aprender, cuidar, disfrutar del mundo animal y conectar con la naturaleza
        </p>
        
        <div className="mt-8 rounded-[2.5rem] overflow-hidden h-[450px] shadow-sm border border-black/5">
          <img 
            src="/ActividadPortada.png" 
            alt="Portada Actividades del Zoo"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error("No se pudo cargar ActividadPortada.png. Revisa el nombre en la carpeta public.");
              e.target.src = "https://via.placeholder.com/1200x450?text=Error+en+nombre+de+archivo"; 
            }}
          />
        </div>
      </section>

      <section className="rounded-[3rem] bg-[#E9EFE2] p-12 mb-16 shadow-inner border border-black/5">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Explora, aprende y protege</h2>
        <p className="text-gray-700 max-w-4xl mb-10 leading-snug text-lg">
          En nuestros recorridos guiados, talleres y charlas descubrirás cómo cada especie cumple un papel vital en el equilibrio del planeta.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {explora.map((act) => (
            <div key={act.id} className="group">
              <div className="rounded-[2rem] overflow-hidden shadow-lg aspect-[4/3] mb-4 bg-white border-4 border-white">
                <img 
                  src={act.url_imagen} 
                  alt={act.nombre} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-black text-gray-900 mb-10 tracking-tight uppercase">
          Actividades mas visitadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {visitadas.map((act) => (
            <article key={act.id} className="flex flex-col space-y-4">
              <div className="rounded-[2rem] overflow-hidden shadow-md aspect-video bg-gray-200">
                <img 
                  src={act.url_imagen} 
                  alt={act.nombre} 
                  className="w-full h-full object-cover hover:brightness-90 transition-all" 
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 mb-1 uppercase tracking-tighter">
                  {act.nombre}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed font-medium">
                  {act.descripcion}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}