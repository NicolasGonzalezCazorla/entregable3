"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 h-20 bg-white/80 backdrop-blur-md border-b border-black/10">
      <div className="mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/perfil.png"
            alt="Inicio"
            className="h-14 w-14 object-contain"
          />
        </Link>

        <nav className="hidden sm:block">
          <ul className="flex items-center gap-10 text-sm md:text-base font-semibold tracking-wider text-gray-800 uppercase">
            <li>
              <Link href="/animales" className="hover:text-black transition">
                Animales
              </Link>
            </li>
            <li>
              <Link href="/mapa" className="hover:text-black transition">
                Mapa
              </Link>
            </li>
            <li>
              <Link href="/Actividades" className="hover:text-black transition">
                Actividades
              </Link>
            </li>
          </ul>
        </nav>

        <Link href="/log-in" className="flex items-center">
          <img
            src="/usuario.png"
            alt="Usuario"
            className="h-10 w-10 object-contain"
          />
        </Link>
      </div>
    </header>
  );
}
