"use client";

import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setError("");
    alert("✅ Login correcto");
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
                type="email"
                placeholder="Input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300/80 bg-white/80 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700/30"
              />
            </div>

            <div>
              <label className="block text-[11px] text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="Input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300/80 bg-white/80 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700/30"
              />
            </div>

            <div>
              <label className="block text-[11px] text-gray-700 mb-1">
                Confirmar contraseña
              </label>
              <input
                type="password"
                placeholder="Input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
