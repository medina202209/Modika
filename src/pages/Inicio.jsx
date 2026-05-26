import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-200 to-stone-100 px-6">
      <div className="max-w-3xl text-center">
        <span className="inline-block bg-stone-300 text-stone-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase border border-stone-400">
          Bienvenido
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 leading-tight mb-6">
          Tu título principal <br />
          <span className="text-amber-700">va aquí</span>
        </h1>
        <p className="text-lg text-stone-700 max-w-xl mx-auto mb-10">
          Descripción breve de tu propuesta de valor. Explica qué ofreces y por
          qué el visitante debería quedarse.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/servicios"
            className="bg-amber-700 text-stone-100 font-semibold px-8 py-3 rounded-full hover:bg-amber-600 transition-colors"
          >
            Ver servicios
          </Link>
          <Link
            to="/nosotros"
            className="border border-stone-500 text-stone-800 font-semibold px-8 py-3 rounded-full hover:border-amber-700 hover:text-amber-700 transition-colors"
          >
            Conoce más
          </Link>
        </div>
      </div>
    </section>
  );
}
