export default function Home() {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <video
        src="/VideoElefantes.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-6 z-10">
        <div className="flex items-center gap-4">
          <img
            src="/image.png"
            alt="Logo Guardianes del Planeta"
          />

          <h1 className="text-[34px] font-extrabold uppercase tracking-wider text-black leading-none">
            GUARDIANES DEL PLANETA
          </h1>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#6B7F4B] text-white rounded-xl text-sm font-medium">
            Log in
          </button>
          <button className="px-4 py-2 bg-[#6B7F4B] text-white rounded-xl text-sm font-medium">
            Sign up
          </button>
        </div>
      </header>
    </div>
  );
}
