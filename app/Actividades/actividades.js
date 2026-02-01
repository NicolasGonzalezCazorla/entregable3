"use client";

import NavBar from "../navBar";

export default function Actividades() {
  return (
    <main className="min-h-screen bg-[#F6F7F3]">
      <NavBar />

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-14 space-y-14">
        <section>
          <h1 className="text-lg sm:text-xl font-extrabold tracking-wide text-gray-900 uppercase">
            ACTIVIDADES QUE CONECTAN CON LA NATURALEZA
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-3xl leading-relaxed">
            Descubre experiencias únicas para aprender, cuidar, disfrutar del mundo
            animal y conectar con la naturaleza.
          </p>

          <div className="mt-5 rounded-md overflow-hidden border border-black/10 bg-white">
            <img
              src="/ActividadPortada.png"
              alt="Personas observando animales"
              className="w-full h-[220px] sm:h-[300px] md:h-[360px] object-cover"
            />
          </div>
        </section>

        <section className="rounded-md bg-[#E8EEDF] border border-black/10 p-7">
          <h2 className="text-sm font-extrabold text-gray-900">
            Explora, aprende y protege
          </h2>

          <p className="mt-2 text-xs text-gray-700 max-w-3xl leading-relaxed">
            Vive experiencias educativas, talleres y salidas guiadas donde podrás
            aprender sobre la vida silvestre y su conservación.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <ActivityTile img="/actividades.png" title="Observación marina" />
            <ActivityTile img="/ActividadSerpiente.png" title="Talleres educativos" />
            <ActivityTile img="/ActividadPajaros.png" title="Avistamiento de aves" />
          </div>
        </section>

        <section>
          <h2 className="text-sm font-extrabold text-gray-900">
            Actividades más visitadas
          </h2>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <MiniCard
              img="/niñaActividad.png"
              title="Encuentro con el gorila"
              desc="Una experiencia única cara a cara con nuestros primates más curiosos."
            />
            <MiniCard
              img="/ActividadLemur.png"
              title="Lémures del Madagascar"
              desc="Disfruta de la simpatía y energía de estos increíbles animales."
            />
            <MiniCard
              img="/ActividadTigres.png"
              title="Tigres de bengala"
              desc="Admira la majestuosidad de los blancos en su hábitat natural."
            />
          </div>

          <div className="mt-10 h-px w-full bg-black/20" />
        </section>
      </div>
    </main>
  );
}

function ActivityTile({ img, title }) {
  return (
    <article className="rounded-md overflow-hidden border border-black/10 bg-white shadow-sm">
      <img src={img} alt={title} className="w-full h-[120px] object-cover" />
    </article>
  );
}

function MiniCard({ img, title, desc }) {
  return (
    <article className="space-y-3">
      <div className="rounded-md overflow-hidden border border-black/10 bg-white">
        <img src={img} alt={title} className="w-full h-[115px] object-cover" />
      </div>

      <div>
        <h3 className="text-xs font-extrabold text-gray-900">{title}</h3>
        <p className="mt-1 text-[11px] text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </article>
  );
}
