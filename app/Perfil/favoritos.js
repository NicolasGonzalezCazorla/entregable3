import Grid from "../grid";

export default function Favoritos() {
  const animalesFavoritos = [
    {
      id: 1,
      nombre: "Pingüino emperador",
      imagen: "/hipopotamo.jpg",
    },
    {
      id: 2,
      nombre: "Pandas gigantes",
      imagen: "/panda.jpg",
    },
  ];

  return (
    <section>
      <h1 className="text-lg font-extrabold text-gray-900">Animales favoritos</h1>
      <Grid animales={animalesFavoritos} />
    </section>
  );
}
