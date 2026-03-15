"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Header() {
  const [avatarUrl, setAvatarUrl] = useState("/usuario.png");

  useEffect(() => {
    async function getAvatar() {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        const { data } = await supabase
          .from("usuario")
          .select("foto_url")
          .eq("auth_id", session.user.id)
          .single();

        if (data?.foto_url) {
          setAvatarUrl(data.foto_url);
        }
      }
    }

    getAvatar();

    const channel = supabase
      .channel('cambios-perfil')
      .on('postgres_changes', 
          { event: 'UPDATE', schema: 'public', table: 'usuario' }, 
          (payload) => {
            if (payload.new.foto_url) setAvatarUrl(payload.new.foto_url);
          }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-20 bg-white/80 backdrop-blur-md border-b border-black/10">
      <div className="mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
        
        <Link href="/zoo" className="flex items-center gap-3">
          <img
            src="/perfil.png"
            alt="Inicio"
            className="h-14 w-14 object-contain"
          />
        </Link>

        <nav className="hidden sm:block">
          <ul className="flex items-center gap-10 text-sm md:text-base font-semibold tracking-wider text-gray-800 uppercase">
            <li><Link href="/animales" className="hover:text-black transition">Animales</Link></li>
            <li><Link href="/mapa" className="hover:text-black transition">Mapa</Link></li>
            <li><Link href="/Actividades" className="hover:text-black transition">Actividades</Link></li>
          </ul>
        </nav>

        <Link href="/Perfil" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-full overflow-hidden border border-black/10 bg-gray-50 shadow-sm transition-transform group-hover:scale-105">
            <img
              src={avatarUrl}
              alt="Mi Perfil"
              className="h-full w-full object-cover"
              onError={(e) => (e.target.src = "/usuario.png")}
            />
          </div>
        </Link>
        
      </div>
    </header>
  );
}