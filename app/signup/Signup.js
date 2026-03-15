"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase"; 
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    edad: "",
    password: "",
    repetirPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.nombre || !form.email || !form.edad || !form.password || !form.repetirPassword) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (Number(form.edad) <= 0) {
      setError("La edad debe ser mayor que 0");
      return;
    }
    if (form.password !== form.repetirPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
      });

      if (authError) throw authError;

      if (authData.user) {
        const idEntero = Math.floor(Date.now() / 1000);

        const { error: dbError } = await supabase
          .from("usuario")
          .insert([
            { 
              id: idEntero, 
              nombre: form.nombre, 
              correo_electronico: form.email, 
              fecha_nacimiento: new Date().toISOString().split('T')[0], 
              contrasenya: form.password,
              auth_id: authData.user.id 
            },
          ]);

        if (dbError) throw dbError;

        alert(" Usuario registrado correctamente");
        router.push("/zoo"); 
      }
    } catch (err) {
      setError("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full">
      <div
        className="min-h-screen w-full bg-cover bg-center flex items-center justify-center px-4"
        style={{ backgroundImage: "url('/Leopardos.png')" }} 
      >
        <div className="w-full max-w-md rounded-2xl bg-white/60 backdrop-blur-md shadow-xl border border-white/40 px-8 py-7">
          <h1 className="text-center text-xl font-extrabold text-gray-900">
            Guardianes del planeta
          </h1>
          <div className="mx-auto mt-3 h-[2px] w-44 bg-gray-700/60 rounded" />

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-[11px] text-gray-700 mb-1">Nombre de usuario</label>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={form.nombre}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300/80 bg-white/80 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700/30"
              />
            </div>

            <div>
              <label className="block text-[11px] text-gray-700 mb-1">Correo electrónico</label>
              <input
                type="email"
                name="email"
                placeholder="email@ejemplo.com"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300/80 bg-white/80 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700/30"
              />
            </div>

            <div>
              <label className="block text-[11px] text-gray-700 mb-1">Edad</label>
              <input
                type="number"
                name="edad"
                placeholder="Tu edad"
                value={form.edad}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300/80 bg-white/80 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700/30"
              />
            </div>

            <div>
              <label className="block text-[11px] text-gray-700 mb-1">Contraseña</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300/80 bg-white/80 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700/30"
              />
            </div>

            <div>
              <label className="block text-[11px] text-gray-700 mb-1">Confirmar contraseña</label>
              <input
                type="password"
                name="repetirPassword"
                placeholder="••••••••"
                value={form.repetirPassword}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300/80 bg-white/80 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700/30"
              />
            </div>

            {error && <p className="text-xs text-red-600 font-bold">{error}</p>}

            <div className="pt-2 flex items-center justify-between">
              <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-400/70 bg-white/70 px-5 py-2 text-sm text-gray-800 hover:bg-white transition">
                Volver
              </Link>

              <button 
                type="submit" 
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-5 py-2 text-sm text-white hover:bg-black transition disabled:opacity-50"
              >
                {loading ? "Registrando..." : "Registrarse"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}