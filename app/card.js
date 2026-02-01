"use client";

import { useState } from "react";
import Link from "next/link";

export default function Card({ animal }) {
  const [favorito, setFavorito] = useState(false);

  return (
    <article className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
      <img
        src={animal.imagen}
        alt={animal.nombre}
        className="w-full h-[190px] object-cover"
      />

      <div className="p-5">
        <h3 className="text-sm sm:text-base font-extrabold tracking-wide text-gray-900 uppercase">
          {animal.nombre}
        </h3>

        <div className="mt-4 flex items-center justify-between">
          <Link
            href={`/detalleAnimal?id=${animal.id}`}
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-black/5 px-4 py-2 text-xs font-bold text-gray-800 hover:bg-black/10 transition"
          >
            DETALLES
          </Link>

          <button
            onClick={() => setFavorito(!favorito)}
            type="button"
            aria-label="Favorito"
            className={`text-4xl transition ${
              favorito
                ? "text-red-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {favorito ? "❤" : "♡"}
          </button>
        </div>
      </div>
    </article>
  );
}
