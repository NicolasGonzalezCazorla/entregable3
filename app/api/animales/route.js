import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('animal')
      .select('id, nombre, nombre_cient, origen, dieta, esperanza_vida, comportamiento, descripcion,imagen');

    if (error) {
      return NextResponse.json(
        { error: "Error al obtener animales: " + error.message }, 
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 200 });

  } catch (err) {
    return NextResponse.json(
      { error: "Error interno del servidor" }, 
      { status: 500 }
    );
  }
}