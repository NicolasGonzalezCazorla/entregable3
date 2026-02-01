"use client";

import Header from "../Header";
import PerfilInfo from "./perfil";
import Favoritos from "./favoritos";
export default function PerfilPage() {
  return (
    <main className="min-h-screen bg-[#F6F7F3]">
      <Header />

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-14">
        <p className="text-[11px] text-gray-500">Perfil</p>

        <PerfilInfo />
        <Favoritos />
      </div>
    </main>
  );
}
