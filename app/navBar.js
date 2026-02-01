"use client";

export default function NavBar({ busqueda, setBusqueda }) {
  return (
    <nav>
      <input
        type="text"
        placeholder="Buscar animal..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </nav>
  );
}
