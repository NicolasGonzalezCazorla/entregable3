// app/detalleAnimal/page.js
import DetalleAnimal from "./detalleAnimal"; // Importa el componente del otro archivo
import Footer from "../Footer";
import Header from "../Header";

export default async function Page({ searchParams }) {
  // En Next.js 15, searchParams es una promesa que debemos esperar
  const params = await searchParams;
  const id = params.id;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      {/* Añadimos un padding-top (pt-28) para que el Header fijo no tape el contenido */}
      <main className="flex-grow pt-28">
        <DetalleAnimal id={id} />
      </main>
      <Footer />
    </div>
  );
}