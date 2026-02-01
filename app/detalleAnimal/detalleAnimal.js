"use client";

export default function AnimalDetalle() {
  const animal = {
    nombre: "Panda gigante",
    nombreCientifico: "Ailuropoda melanoleuca",
    origen: "Bosques montañosos de China",
    dieta: "Herbívoro (principalmente bambú)",
    esperanzaVida: "20 a 30 años",
    estado: "Vulnerable",
    comportamiento: "Solitario, pacífico y muy juguetón",
    descripcion:
      "El panda gigante es uno de los animales más emblemáticos del mundo. Origina de las montañas de China, se alimenta principalmente de bambú y es conocido por su carácter tranquilo y su distintivo pelaje blanco y negro. En nuestro zoológico podrás observarlo en un espacio que simula su ecosistema natural.",
    imagen: "/panda.jpg",
  };

  return (
    <main className="min-h-screen bg-[#F6F7F3]">
      <div className="mx-auto max-w-7xl px-8 pt-28 pb-16">
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-sm">
            <img
              src={animal.imagen}
              alt={animal.nombre}
              className="w-full h-[300px] sm:h-[360px] md:h-[420px] object-cover"
            />
          </div>

          <div className="pt-4 max-w-xl">
            <p className="text-base text-gray-700 leading-relaxed">
              {animal.descripcion}
            </p>
          </div>
        </section>
        <section className="mt-12">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {animal.nombre}
          </h1>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-4 text-sm text-gray-700">
            <InfoRow label="Nombre científico" value={animal.nombreCientifico} />
            <InfoRow label="Esperanza de vida" value={animal.esperanzaVida} />
            <InfoRow label="Origen" value={animal.origen} />
            <InfoRow label="Estado de conservación" value={animal.estado} />
            <InfoRow label="Dieta" value={animal.dieta} />
            <InfoRow label="Comportamiento" value={animal.comportamiento} />
          </div>
        </section>
      </div>
    </main>
  );
}
function InfoRow({ label, value }) {
  return (
    <p className="leading-relaxed">
      <span className="font-semibold text-gray-900">{label}:</span>{" "}
      <span>{value}</span>
    </p>
  );
}
