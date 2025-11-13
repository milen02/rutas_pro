export default function Register() {
  return (
    <div className="h-screen bg-main-bg bg-cover bg-center flex flex-col justify-center items-center text-white">
      <div className="w-80 bg-black/30 p-6 rounded-2xl backdrop-blur-md">
        <h2 className="text-2xl font-bold mb-6 text-center">REGISTRO</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Nombre" className="p-2 rounded bg-white/80 text-black" />
          <input type="email" placeholder="Email" className="p-2 rounded bg-white/80 text-black" />
          <input type="password" placeholder="Contraseña" className="p-2 rounded bg-white/80 text-black" />
          <input type="password" placeholder="Confirmar contraseña" className="p-2 rounded bg-white/80 text-black" />
          <button className="bg-primary py-2 rounded font-semibold hover:bg-pink-600 transition">REGISTRAR</button>
        </form>
      </div>
    </div>
  );
}
