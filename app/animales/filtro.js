"use client";

export default function Filtro({
  orden,
  setOrden,
  filtroTipo,
  setFiltroTipo,
  filtroContinente,
  setFiltroContinente,
}) {
  const Row = ({ label, checked, onChange, name }) => (
    <label className="flex items-center gap-2 text-xs text-gray-800 cursor-pointer select-none">
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-3.5 w-3.5 accent-gray-800"
      />
      {label}
    </label>
  );

  return (
    <aside className="text-gray-900">
      <div className="space-y-6">
        <div>
          <h3 className="text-xs font-bold text-gray-900">Ordenar Por</h3>
          <div className="h-px bg-black/50" />

          <div className="mt-2 space-y-2">
            <Row
              name="orden"
              label="Más gustados"
              checked={orden === "gustados"}
              onChange={() => setOrden("gustados")}
            />
            <Row
              name="orden"
              label="Alfabético"
              checked={orden === "alfabetico"}
              onChange={() => setOrden("alfabetico")}
            />
          </div>
        </div>

        <div className="h-px bg-black/50" />

        <div>
          <h3 className="text-xs font-bold text-gray-900">Tipo</h3>
          <div className="mt-2 space-y-2">
            <Row
              name="tipo"
              label="Mamíferos"
              checked={filtroTipo === "Mamíferos"}
              onChange={() => setFiltroTipo("Mamíferos")}
            />
            <Row
              name="tipo"
              label="Aves"
              checked={filtroTipo === "Aves"}
              onChange={() => setFiltroTipo("Aves")}
            />
            <Row
              name="tipo"
              label="Reptiles"
              checked={filtroTipo === "Reptiles"}
              onChange={() => setFiltroTipo("Reptiles")}
            />
            <Row
              name="tipo"
              label="Peces"
              checked={filtroTipo === "Peces"}
              onChange={() => setFiltroTipo("Peces")}
            />
          </div>
        </div>

        <div className="h-px bg-black/50" />
        <div>
          <h3 className="text-xs font-bold text-gray-900">Continente</h3>
          <div className="mt-2 space-y-2">
            <Row
              name="continente"
              label="Europa"
              checked={filtroContinente === "Europa"}
              onChange={() => setFiltroContinente("Europa")}
            />
            <Row
              name="continente"
              label="Asia"
              checked={filtroContinente === "Asia"}
              onChange={() => setFiltroContinente("Asia")}
            />
            <Row
              name="continente"
              label="África"
              checked={filtroContinente === "África"}
              onChange={() => setFiltroContinente("África")}
            />
            <Row
              name="continente"
              label="Oceanía"
              checked={filtroContinente === "Oceanía"}
              onChange={() => setFiltroContinente("Oceanía")}
            />
            <Row
              name="continente"
              label="América"
              checked={filtroContinente === "América"}
              onChange={() => setFiltroContinente("América")}
            />
            <Row
              name="continente"
              label="Antártida"
              checked={filtroContinente === "Antártida"}
              onChange={() => setFiltroContinente("Antártida")}
            />
          </div>

        <div className="h-px bg-black/50" />

          <button
            type="button"
            onClick={() => {
              setFiltroTipo("");
              setFiltroContinente("");
              setOrden("gustados");
            }}
            
            className="mt-4 text-xs font-semibold text-gray-700 hover:text-black underline"
          >Quitar filtros</button>
        </div>
      </div>
    </aside>
  );
}
