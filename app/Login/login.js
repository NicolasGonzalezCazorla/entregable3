"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase"; 
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);

    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (authError) {
      setError("Error: " + authError.message);
      setLoading(false);
    } else {
      router.push("/zoo"); 
    }
  };

  return (
    <main className="min-h-screen w-full">
      <div
        className="min-h-screen w-full bg-cover bg-center flex items-center justify-center px-4"
        style={{ backgroundImage: "url('/Leopardos.png')" }}
      >
        <div className="w-full max-w-md rounded-2xl bg-white/60 backdrop-blur-md shadow-xl border border-white/40 px-8 py-7">
          <h1 className="text-center text-xl font-extrabold text-gray-900 uppercase tracking-tighter">
            Guardianes del planeta
          </h1>
          <div className="mx-auto mt-3 h-[2px] w-44 bg-gray-700/60 rounded" />

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-[11px] text-gray-700 mb-1 uppercase font-bold">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300/80 bg-white/80 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700/30"
              />
            </div>

            <div>
              <label className="block text-[11px] text-gray-700 mb-1 uppercase font-bold">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300/80 bg-white/80 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700/30"
              />
            </div>

            <div>
              <label className="block text-[11px] text-gray-700 mb-1 uppercase font-bold">
                Confirmar contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300/80 bg-white/80 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700/30"
              />
            </div>

            {error && (
              <p className="text-xs text-red-600 font-bold bg-red-100/50 p-2 rounded-md border border-red-200">
                ⚠️ {error}
              </p>
            )}

            <div className="pt-2 flex items-center justify-between">
              <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-400/70 bg-white/70 px-6 py-2 text-sm font-bold text-gray-800 hover:bg-white transition">
                VOLVER
              </Link>

              <button 
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-8 py-2 text-sm font-bold text-white hover:bg-black transition disabled:opacity-50"
              >
                {loading ? "ENTRANDO..." : "ENTRAR"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}