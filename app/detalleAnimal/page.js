import DetalleAnimal from "./detalleAnimal"; 
import Footer from "../Footer";
import Header from "../Header";

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const id = params.id;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow pt-28">
        <DetalleAnimal id={id} />
      </main>
      <Footer />
    </div>
  );
}