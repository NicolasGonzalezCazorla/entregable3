import { supabase } from "@/lib/supabase";
import Header from "../Header";
import Footer from "../Footer";
import ActividadesContent from "./actividades";

export default async function Page() {
  // Traemos el id y el resto de campos
  const { data: actividades, error } = await supabase
    .from("actividades")
    .select("id, nombre, descripcion, url_imagen, categoria");

  if (error) {
    console.error("Error cargando actividades:", error);
  }

  return (
    <div className="min-h-screen bg-[#F6F7F3]">
      <Header />
      <div className="pt-24">
        <ActividadesContent actividades={actividades || []} />
      </div>
      <Footer />
    </div>
  );
}