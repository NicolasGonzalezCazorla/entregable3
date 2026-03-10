"use client";

export default function ActividadesContent({ actividades }) {
  const explora = actividades.filter(a => a.categoria === 'explora');
  const visitadas = actividades.filter(a => a.categoria === 'visitadas');

  return (
    <main className="mx-auto max-w-6xl px-6 pb-14 space-y-16">
      {/* ... Sección Cabecera igual que antes ... */}

      {/* BLOQUE VERDE: EXPLORA */}
      <section className="rounded-[3rem] bg-[#E8EEDF] border border-black/5 p-10 shadow-inner">
        <h2 className="text-xl font-bold text-gray-800 mb-8 tracking-tight">Explora, aprende y protege</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {explora.map((act) => (
            <div key={act.id} className="group cursor-pointer">
              <div className="rounded-[2rem] overflow-hidden shadow-md bg-white aspect-[4/3] mb-4">
                <img 
                  src={act.url_imagen} 
                  alt={act.nombre} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <h3 className="text-center font-bold text-gray-700 text-sm uppercase tracking-widest">{act.nombre}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* BLOQUE: MÁS VISITADAS */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-10 tracking-tight">Actividades más visitadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {visitadas.map((act) => (
            <article key={act.id} className="flex flex-col">
              <div className="rounded-[2.5rem] overflow-hidden border border-gray-100 mb-6 shadow-sm aspect-video">
                <img 
                  src={act.url_imagen} 
                  alt={act.nombre} 
                  className="w-full h-full object-cover hover:brightness-90 transition-all" 
                />
              </div>
              <h3 className="text-lg font-extrabold text-gray-900 mb-2 tracking-tight uppercase">{act.nombre}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {act.descripcion}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}