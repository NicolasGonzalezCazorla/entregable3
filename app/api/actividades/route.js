import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

// MÉTODO GET: Para listar todos los animales en la interfaz
export async function GET() {
  try {
    // Consultamos la tabla 'animal' con las columnas exactas de tu captura
    const { data, error } = await supabase
      .from('actividad')
      .select('id, nombre,descripcion,url_imagen');

    // Si hay un error en la base de datos, devolvemos un 500 (Error del servidor)
    if (error) {
      return NextResponse.json(
        { error: "Error al obtener animales: " + error.message }, 
        { status: 500 }
      );
    }

    // Si todo va bien, devolvemos los datos con un 200 OK
    return NextResponse.json(data, { status: 200 });

  } catch (err) {
    // Gestión de errores controlada para evitar que la app pete
    return NextResponse.json(
      { error: "Error interno del servidor" }, 
      { status: 500 }
    );
  }
}