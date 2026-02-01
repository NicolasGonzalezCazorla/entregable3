"use client";

import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    edad: "",
    password: "",
    repetirPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.nombre ||
      !form.email ||
      !form.edad ||
      !form.password ||
      !form.repetirPassword
    ) {
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

    setError("");
    alert("✅ Usuario registrado correctamente");

    setForm({
      nombre: "",
      email: "",
      edad: "",
      password: "",
      repetirPassword: "",
    });
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
              <label className="block text-[11px] text-gray-700 mb-1">
                Nombre de usuario
              </label>
              <input
                type="text"
                name="nombre"
                placeholder="Input"
                value={form.nombre}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300/80 bg-white/80 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700/30"
              />
            </div>

            <div>
              <label className="block text-[11px] text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                placeholder="Input"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300/80 bg-white/80 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700/30"
              />
            </div>

            <div>
              <label className="block text-[11px] text-gray-700 mb-1">
                Fecha de nacimiento
              </label>
              <input
                type="number"
                name="edad"
                placeholder="Input"
                value={form.edad}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300/80 bg-white/80 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700/30"
              />
            </div>

            <div>
              <label className="block text-[11px] text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                placeholder="Input"
                value={form.password}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300/80 bg-white/80 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700/30"
              />
            </div>

            <div>
              <label className="block text-[11px] text-gray-700 mb-1">
                Confirmar contraseña
              </label>
              <input
                type="password"
                name="repetirPassword"
                placeholder="Input"
                value={form.repetirPassword}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300/80 bg-white/80 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700/30"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 font-medium">{error}</p>
            )}

            <div className="pt-2 flex items-center justify-between">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-400/70 bg-white/70 px-5 py-2 text-sm text-gray-800 hover:bg-white transition"
              >
                <span className="inline-block w-4 h-4 rounded-full border border-gray-500/60" />
                Volver
              </Link>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-400/70 bg-white/70 px-5 py-2 text-sm text-gray-800 hover:bg-white transition"
              >
                <span className="inline-block w-4 h-4 rounded-full border border-gray-500/60" />
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
