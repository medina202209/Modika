import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-200 to-stone-100 px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 leading-tight mb-6">
          Modika <br />
        </h1>
        <p className="text-lg text-stone-700 max-w-xl mx-auto mb-10">
          ⚡ ¡Algo increíble está llegando!

          Nuestra página se encuentra en proceso de actualización para traerte una experiencia totalmente renovada. 🚀
          Vuelve pronto.
        </p>
      </div>
    </section>
  );
}
