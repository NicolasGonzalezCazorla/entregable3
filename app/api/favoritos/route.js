import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { animalId, usuarioId, esFavorito } = await request.json();

  if (esFavorito) {
    const { error } = await supabase
      .from("animales_favoritos_usuarios")
      .insert([{ animal: animalId, usuario: usuarioId }]);
    
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  } else {
    const { error } = await supabase
      .from("animales_favoritos_usuarios")
      .delete()
      .match({ animal: animalId, usuario: usuarioId });

    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}