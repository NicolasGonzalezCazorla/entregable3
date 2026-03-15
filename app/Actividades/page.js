import { supabase } from "@/lib/supabase";
import Header from "../Header";
import Footer from "../Footer";
import ActividadesContent from "./actividades";

export const revalidate = 0;

export default async function Page() {
  const { data: actividades, error } = await supabase
    .from("actividad")
    .select("id, nombre, descripcion, url_imagen, categoria");

  if (error) {
    console.error("Error cargando actividad:", error);
    return <div className="p-20 text-center">Error al conectar con Supabase. Revisa las políticas RLS.</div>;
  }

  return (
    <div className="min-h-screen bg-[#F6F7F3]">
      <Header />
      <div className="pt-28"> 
        <ActividadesContent actividades={actividades || []} />
      </div>
      <Footer />
    </div>
  );
}