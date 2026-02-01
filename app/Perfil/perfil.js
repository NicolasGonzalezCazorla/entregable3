import Image from "next/image";

export default function PerfilInfo() {
  return (
    <section className="mt-5 flex items-start gap-8">
      {/* Columna izquierda: avatar + username debajo */}
      <div className="flex w-[170px] flex-col items-center">
        <div className="h-24 w-24 rounded-full overflow-hidden border border-black/10 bg-white shadow-sm">
          <Image
            src="/image.png"
            alt="Foto de perfil"
            width={160}
            height={160}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <p className="mt-3 text-gray-700 text-center">
          Super panda guerrero del dragon <span className="font-semibold"></span>
        </p>
      </div>

      {/* Columna derecha: datos */}
      <div className="flex-1 pt-2">
        <p className="text-xs text-gray-700">
          <span className="font-semibold text-gray-900">Nombre:</span>{" "}
          Información del usuario
        </p>

        <p className="mt-1 text-xs text-gray-700">
          <span className="font-semibold text-gray-900">
            Dirección de correo electrónico:
          </span>{" "}
          Correo de usuario
        </p>

        {/* Botoncito editar (simple, como iconito suelto) */}
        <button
          type="button"
          className="mt-2 inline-flex items-center justify-center h-7 w-7 rounded-md border border-black/10 bg-white shadow-sm hover:bg-black/5 transition"
          aria-label="Editar"
          title="Editar"
        >
          ✎
        </button>
      </div>
    </section>
  );
}
