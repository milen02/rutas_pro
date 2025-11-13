import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen bg-main-bg bg-cover bg-center flex flex-col items-center justify-center text-white font-sans">
      <div className="text-center">
        <img src="/src/assets/logo.png" alt="Logo" className="w-32 mx-auto mb-4" />
        <h1 className="text-lg font-semibold tracking-wide">SISTEMA DE RUTAS DE TRANSPORTE (MINIBUS)</h1>
        <p className="text-2xl mt-8 font-bold">BIENVENIDOS</p>

        <div className="mt-8 flex flex-col gap-3">
          <Link to="/login" className="bg-primary px-10 py-2 rounded-full font-semibold hover:bg-pink-600 transition">INGRESAR</Link>
          <Link to="/map" className="bg-primary px-10 py-2 rounded-full font-semibold hover:bg-pink-600 transition">INVITADO</Link>
          <Link to="/register" className="bg-primary px-10 py-2 rounded-full font-semibold hover:bg-pink-600 transition">REGISTRARSE</Link>
        </div>
      </div>
    </div>
  );
}
